import Link from 'next/link'
import Time_Ago from "../../components/other/time-ago"
import { useState } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

const Blog = () => {

  const router = useRouter()
  const [blog, setblog] = useState([])
  const [moreblogs, setmoreblogs] = useState([])
  const fetchBlog = async () => {
    const response = await fetch('/api/blogs')
    const data = await response.json()
    const filteredblog = data.filter(blog => blog.heading.replace(/\s/g , "-") == router.query.blogname)
    const exclude = data.filter(blog => blog.heading.replace(/\s/g , "-") != router.query.blogname)
    setblog(filteredblog)
    setmoreblogs(exclude)
  }

  fetchBlog()

  return (
    <>
    {
      blog.map(blog => {
          return (
            <div key={blog.id}>
              <h1 className="font-serif text-center md:text-5xl text-3xl mt-32 sm:m-8 md:font-normalfont-semibold">{blog.heading}</h1>
              <div className="grid grid-cols-12 mt-16">
                <div className="grid col-start-2  space-x-8 sm:space-x-4 md:space-x-3 lg:space-x-0 grid-cols-2"><div className="h-10 rounded-full overflow-hidden w-10"><img src={blog.writer_pic} alt="picture" /></div>
                <div className="grid w-max grid-cols-1">
                <p className="text-sm px-1">{blog.writer}</p>
                <p className="px-1 text-sm w-max"><Time_Ago date={blog.date}/></p>
        </div>
      </div>
    </div>
    <div className="font-serif md:mx-28 sm:mx-12 mx-8 md:text-lg text-base font-light mt-8 mb-14"><>{blog.article}</></div>
            </div>
          )
        }
          )
        }

    <h1 className="text-2xl text-center mb-8">Read more</h1>
  
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    

    {
        moreblogs.map(moreblogs => {
          return (
            <div key={moreblogs.id}>
              <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href={'/blog/' + moreblogs.id}><a>{moreblogs.heading}</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/tips-for-overcoming-procrastination"><a>{moreblogs.content}</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date={moreblogs.date}/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">{moreblogs.topic}</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={moreblogs.pic} alt="" />
          </a></Link>
        </div>
        </div>
            </div>
          )
        }
          )
        }
    </div>
    </div>

    
    
    </>
  )
}

export default Blog
