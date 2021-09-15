import Link from 'next/link'

const Blog_Subsection = () => {
  return (
    <>
      <div className="hidden sm:block fixed">
        <h1 className="text-xl font-medium ml-8">Topics</h1>
        <div className="flex flex-wrap">
          <Link href="/blogs/topic/time-management" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Time Management</p></Link>
          <Link href="/blogs/topic/career" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Career</p></Link>
          <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Self Help</p></Link>
          <Link href="/blogs/topic/mental-health" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Mental Health</p></Link>
          <Link href="/blogs/topic/interview-preperation" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Interview Preperation</p></Link>
          <Link href="/blogs/topic/entrepreneurship" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Entrepreneurship</p></Link>
        </div>
      </div>
    </>
  )
}

export default Blog_Subsection
