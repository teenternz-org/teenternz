import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Teenternz</title>
        <meta name="description" content="Platform to find remote internships and volunteer opportunities by NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" md:p-16 p-8 sm:my-24 my-20 align-middle justify-items-center">
        <h1 className="md:font-bold md:text-5xl font-medium text-3xl sm:text-4xl">
        Platform to find <span className="text-blue-500 ">remote internships and volunteer opportunities</span> by NGOs
        </h1>
        <p className="font-normal mt-4 mb-8 sm:text-lg text-gray-700">Teenternz helps Students find Remote Internships and volunteer opportunites from around the globe. apart from that Students can find various resources such as articles, books.</p>
      <div className=" mt-8  space-x-8 flex flex-1">
        <Link href="/internships" passHref><div className="bg-blue-500 text-white rounded-lg font-medium cursor-pointer shadow-md text-lg py-2 px-4">Find internships</div></Link>
        <Link href="#" passHref><div className="text-lg font-medium p-2 cursor-pointer">Join</div></Link>
      </div>
      </div> 
      <h1 className="md:text-3xl text-2xl text-center font-medium pt-6" id="#explore">What we Offer?</h1>

      <div className="mx-16 grid sm:grid-cols-2 space-x-8 grid-cols-1">

        <div><img className="md:h-80 mx-auto md:mt-36 sm:mt-24 mt-16" src="/img/undraw_Job_hunt_re_q203.svg" alt="calendar icon" /></div>
        <div><p className="md:text-xl text-lg sm:my-16 my-8 sm:py-24 py-16 md:py-36">Teenternz provides internships for students, young professionals and young entrepreneurs. We have a large network of NGOs and Non-profit organisations who are willing to offer internships to our students.</p></div>
    

          <div className=""><p className="md:text-xl text-lg sm:my-16 my-8 sm:py-24 py-16 md:py-36">We bring young achievers in our events, where you can watch them and ask your questions. These events are open to all, and we are always looking for new events to add.</p></div>
          <div className="row-start-3 sm:col-start-2 sm:row-start-2 md:mt-36 sm:mt-24 mt-16"><img className="md:h-80 mx-auto" src="/img/undraw_Events_re_98ue.svg" alt="calendar icon" /></div>


        <div><img className="md:h-80 mx-auto md:mt-36 sm:mt-24 mt-16" src="/img/undraw_Online_articles_re_yrkj.svg" alt="calendar icon" /></div>
        <div><p className="md:text-xl text-lg sm:my-16 my-8 sm:py-24 py-16 md:py-36">Our articles are written by our students and professionals. Our team of writers are always ready givr you the best content, tips and tricks to help you in your study and career.</p></div>
      </div>
    </>
  )
}
