import Link from 'next/link';
import Blog_Subsection from '../../components/blog-subsection';
import Time_Ago from '../../components/time-ago';

const Entrepreneurship = () => {
  return (
    <>
      <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Blogs by Sanskriti Jain</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">
        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-build-remote-teams-effectively"><a>How to Build a team for your organisation</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-build-remote-teams-effectively"><a>Trust in the team is the most important thing especially in the remote teams. In addition to trust, communication is no less important. If these...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 21, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-build-remote-teams-effectively"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/articles/pexels-fauxels-3184418.jpg" alt="" />
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

      <Blog_Subsection  />
      
    </div>
    </div>
    </>
  )
}

export default Entrepreneurship
