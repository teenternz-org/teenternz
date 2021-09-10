import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection';
import Time_Ago from '../../../components/other/time-ago';

const Janhavi_Inamdar = () => {
  return (
    <>
                    <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Blogs by Janhavi Inamdar</h1>
                    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">
    <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>How to deal with stress and Anxiety as a student</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>Anything that your mind says has an identical response to the body cells. That’s why stress is the response your body gives physically or mentally...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 13, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/articles/pexels-anna-shvets-4226215.jpg" alt="" />
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
        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-start-an-organization-in-high-school"><a>How to start an organisation in high school</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-start-an-organization-in-high-school"><a>An organization is a group of organized people working on achieving a specific goal. Starting an organization, club, non-fund, anything is a great idea for...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="July 21, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-start-an-organization-in-high-school"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/articles/pexels-minervastudio-2897883.jpg" alt="" />
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

export default Janhavi_Inamdar
