import Link from 'next/link'

const Blog_Subsection = () => {
  return (
    <>
      <div className="hidden sm:block fixed">
        <h1 className="text-xl font-medium ml-8 -mt-16">Authors</h1>
        <div className="flex flex-wrap">
          <Link href="/authors/sanskriti-jain" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Sanskriti Jain</p></Link>
          <Link href="/authors/delina-thatai" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Delina Thatai</p></Link>
          <Link href="/authors/keshav-sharma" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Keshav Sharma</p></Link>
          <Link href="/authors/janhavi-inamdar" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Janhavi Inamdar</p></Link>
          <Link href="/authors/erik-burckhardt" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Erik Burckhardt</p></Link>
        </div>
        <h1 className="text-xl font-medium ml-8 mt-16">Topics</h1>
        <div className="flex flex-wrap">
          <Link href="/topics/time-management" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Time Management</p></Link>
          <Link href="/topics/career" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Career</p></Link>
          <Link href="/topics/self-help" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Self Help</p></Link>
          <Link href="/topics/mental-health" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Mental Health</p></Link>
          <Link href="/topics/interview-preperation" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Interview Preperation</p></Link>
          <Link href="/topics/entrepreneurship" passHref><p className="border-2 bg-gray-100 p-2 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Entrepreneurship</p></Link>
        </div>
      </div>
    </>
  )
}

export default Blog_Subsection
