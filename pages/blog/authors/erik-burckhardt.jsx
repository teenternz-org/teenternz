import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection';
import Time_Ago from '../../../components/other/time-ago';

const Erik_Burckhardt = () => {
  return (
    <>
    <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Blogs by Erik Burckhardt</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">
    <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a>How to Manage time as a Student</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a>You can feel it very easy if you just hold on and do nothing, the clock moves forward and the seconds are going away. This...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="July 25, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/articles/pexels-pixabay-39396.jpg" alt="" />
          </a></Link>
        </div>
        </div>
        </div>
    <div>
      <Blog_Subsection />
      
    </div>
    </div>
    </>
  )
}

export default Erik_Burckhardt
