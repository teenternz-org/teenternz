import Link from 'next/link'
import Blog_Subsection from '../../../components/blog-subsection'
import Time_Ago from '../../../components/other/time-ago'

const Career = () => {
  return (
    <>
        <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Career</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/gap-year-the-aftermath-of-highschool"><a>Gap Year: The Aftermath of Highschool</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/gap-year-the-aftermath-of-highschool"><a>Graduation is that time of your life where progression has started to come where new beginnings and the first chapter of your story would take...</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="September 24 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/career" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Career</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/rodnae-productions-7683763.jpg" alt="" />
          </a></Link>
        </div>
        </div>

    <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-find-your-passion"><a>How to Find your Passion</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-find-your-passion"><a>Passion is a feeling of intense enthusiasm or desire for someone or something. Passion can vary from eager interest in or admiration for an idea...</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 29 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/career" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Career</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-burst-374068.jpg" alt="" />
          </a></Link>
        </div>
        </div>
        
        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-build-remote-teams-effectively"><a>How to build remote teams effectively</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-build-remote-teams-effectively"><a>Trust in the team is the most important thing especially in the remote teams. In addition to trust, communication is no less important. If these...</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 21, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/entrepreneurship" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Entrepreneurship</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-build-remote-teams-effectively"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-fauxels-3184418.jpg" alt="" />
          </a></Link>
        </div>
        </div>

    <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-find-your-passion"><a> How to Find your Passion</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-find-your-passion"><a>Passion is a feeling of intense enthusiasm or desire for someone or something. Passion can vary from eager interest in or admiration for an idea...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 29 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-burst-374068.jpg" alt="" />
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

export default Career
