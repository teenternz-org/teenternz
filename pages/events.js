import Time_Ago from '../components/other/time-ago'
import Head from 'next/head'

const Events = () => {
  return (
    <>
      <Head>
        <title>Interviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-medium m-16">

        Recent Events

      </h1>
      <div className="h-44 w-44 mx-16 overflow-hidden rounded-lg">

        <img src="/interviews/i1.jpg" alt="" />
      </div>
      <p className="text-xl mt-4 mx-16">How 13 and 7 years old started their STEM podcast<span className="text-sm text-gray-800 dark:text-gray-200"><Time_Ago date="3 September 2021" /></span><span className="text-base">Jaansi and Sunny Patel are siblings running LearnOn Podcast, the science show by kids, for kids!</span></p>
      <a href="https://www.instagram.com/tv/CTXKTdJlS3D/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer"><button className="bg-blue-300 dark:bg-blue-900 my-4 shadow-md p-2 hover:scale-110 hover:shadow-xl transition-transform ml-20 text-sm font-medium rounded-full text-center cursor-pointer mt-6">Watch</button></a>

      {/* Extra space */}
      <div className="h-16"></div>
    </>
  )
}

export default Events
