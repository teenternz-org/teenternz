import Link from 'next/link'

const Blog_Subsection = () => {
  return (
    <>
      <div className="hidden sm:block fixed">
        <h1 className="text-xl font-medium ml-8 -mt-16">Authors</h1>
        <div className="flex flex-wrap">
          <Link href="/authors/sanskriti-jain" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Sanskriti Jain</p></Link>
        </div>
        <h1 className="text-xl font-medium ml-8 mt-16">Topics</h1>
        <div className="flex flex-wrap">
          <Link href="/topics/time-management" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Time Management</p></Link>
          <Link href="/topics/career" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Career</p></Link>
          <Link href="/topics/self-help" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Self Help</p></Link>
          <Link href="/topics/mental-health" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Mental Health</p></Link>
          <Link href="/topics/interview-preperation" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Interview Preperation</p></Link>
          <Link href="/topics/entrepreneurship" passHref><p className="bg-gray-100 p-2 shadow ml-4 mt-6 rounded-full text-center cursor-pointer px-auto">Entrepreneurship</p></Link>
        </div>
      </div>
    </>
  )
}

export default Blog_Subsection
