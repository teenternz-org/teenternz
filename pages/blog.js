import Link from "next/link"
import Head from 'next/head'
import Blog_Subsection from "../components/blog-subsection"
import Time_Ago from "../components/other/time-ago"

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <p><Link href="/blogs/how-to-unfocus-to-focus"><a>How to Unfocus to Focus</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-unfocus-to-focus"><a>In this article we are going to tell you how important it is to take a break and how to take an effective and productive...</a></Link></p>
            <div className="flex flex-1">

            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 17, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Self Help</p></Link>
        </div></div>
            </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-unfocus-to-focus"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-andrea-piacquadio-941555.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
              <p><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>How to deal with stress and still enjoy our highschool life</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>Anything that your mind says has an identical response to the body cells. That’s why stress is the response your body gives physically or mentally...</a></Link></p>
            <div className="flex flex-1">

            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 13, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/mental-health" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Mental Health</p></Link>
        </div></div>
            </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-anna-shvets-4226215.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-study-and-manage-extracurriculars"><a>How to study and manage extracurriculars</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-study-and-manage-extracurriculars"><a>Intelligence and personality have always been inextricably intertwined with education. It is not just your grades or the number of AP classes that count as...</a></Link></p>
            <div className="flex flex-1">

            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 7, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/time-management" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Time Management</p></Link>
        </div></div>
            </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-study-and-manage-extracurriculars"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-tima-miroshnichenko-5428148.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a>How can students make the most out of their time?</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a>You can feel it very easy if you just hold on and do nothing, the clock moves forward and the seconds are going away. This...</a></Link></p>
            <div className="flex flex-1">

            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="July 25, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/time-management" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Time Management</p></Link>
        </div></div>
            </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-pixabay-39396.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-start-an-organization-in-high-school"><a>How to start an organisation in high school</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-start-an-organization-in-high-school"><a>An organization is a group of organized people working on achieving a specific goal. Starting an organization, club, non-fund, anything is a great idea for...</a></Link></p>
            <div className="flex flex-1">

            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="July 21, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/entrepreneurship" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Entrepreneurship</p></Link>
        </div></div>
            </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-start-an-organization-in-high-school"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-minervastudio-2897883.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a>How to prepare for an interview as a high school student!</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a>The interview is one of the key fragments of the process of getting hired and is a complete game-changer if it goes well. But it...</a></Link></p>
            <div className="flex flex-1">

            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="July 8, 2021"/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/interview-preperation" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">Interview Preperation</p></Link>
        </div></div>
            </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-fauxels-3184465.jpg" alt="" />
          </a></Link>
        </div>
        </div>
    </div>
    <div className="mt-24">

    <Blog_Subsection  />
      
    </div>
    </div>
    
    </>
  )
}

export default Blog