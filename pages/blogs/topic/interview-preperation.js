import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection'
import Time_Ago from '../../../components/other/time-ago'

const Interview_Preperation = () => {
  return (
    <>
      <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Interview Preperation</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a>How to crack an Interview as a High school Student</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a>The interview is one of the key fragments of the process of getting hired and is a complete game-changer if it goes well. But it...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="July 8, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-fauxels-3184465.jpg" alt="" />
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

export default Interview_Preperation
