import Time_Ago from '../components/other/time-ago'
import Link from 'next/link'

const Events = () => {
  return (
    <>
    <h1 className="text-2xl m-16">Interviews</h1>
    <div className="h-44 w-44 mx-16 overflow-hidden rounded-lg">

    <img src="/interviews/i1.jpg" alt="" />
    </div>
    <p className="text-xl mt-4 mx-16">How 13 and 7 years old started their STEM podcast<span className="text-base"><Time_Ago date="3 September 2021" /></span><span className="text-base">Jaansi and Sunny Patel are siblings running LearnOn Podcast, the science show by kids, for kids!</span></p>
    <a href="https://www.instagram.com/tv/CTXKTdJlS3D/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer"><button className="border-2 bg-gray-100 p-2 ml-16 text-sm font-medium rounded-full text-center cursor-pointer mt-6">Watch the recap</button></a>
    </>
  )
}

export default Events
