import Link from "next/link"
import Head from 'next/head'
import Blog_Subsection from "../components/blog-subsection"
import Time_Ago from "../components/other/time-ago"
import { useState } from 'react'

const Blog = () => {

  const [blogs, setComments] = useState([])
  const fetchComments = async () => {
    const response = await fetch('/api/blogs')
    const data = await response.json()
    setComments(data)
  }

  fetchComments()

  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    {
        blogs.map(blog => {
          return (
            <div key={blog.id}>
              <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/tips-for-overcoming-procrastination"><a>{blog.heading}</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/tips-for-overcoming-procrastination"><a>{blog.content}</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date={blog.date}/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">{blog.topic}</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={blog.pic} alt="" />
          </a></Link>
        </div>
        </div>
            </div>
          )
        }
          )
        }
    </div>
    <div className="mt-24">

    <Blog_Subsection  />
      
    </div>
    </div>
    
    </>
  )
}

export default Blog
