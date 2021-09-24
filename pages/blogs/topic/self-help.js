import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection'
import Time_Ago from '../../../components/other/time-ago'

const Self_Help = () => {
  return (
    <>
      <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Self Help</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/tips-for-overcoming-procrastination"><a>Tips for Overcoming Procrastination</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/tips-for-overcoming-procrastination"><a>In our lives, we all have experienced a certain trait that sometimes makes us feel stuck in one place. For instance, when trying to complete...</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="September 24 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Self Help</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/cottonbro-6214649.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-unfocus-to-focus"><a>How to Unfocus to Focus</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-unfocus-to-focus"><a>In this article we are going to tell you how important it is to take a break and how to take an effective and productive...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 17, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-unfocus-to-focus"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/articles/pexels-andrea-piacquadio-941555.jpg" alt="" />
          </a></Link>
        </div>
        </div>
    </div>
    <div>

      <Blog_Subsection  />
      
    </div>
    </div>
    </>
  )
}

export default Self_Help
