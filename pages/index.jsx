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

      <div className=" md:p-16 p-8 my-24 align-middle justify-items-center">
        <h1 className="md:font-bold md:text-5xl font-medium text-3xl sm:text-4xl">
        Platform to find <span className="text-blue-500 ">remote internships and volunteer opportunities</span> by NGOs
        </h1>
        <p className="font-normal mt-4 mb-8 sm:text-lg text-gray-700">Teenternz helps Students find Remote Internships and volunteer opportunites from around the globe. apart from that Students can find various resources such as articles, books.</p>
      <div className=" mt-8  space-x-8 flex flex-1">
        <Link href="/internships" passHref><div className="bg-blue-500 text-white rounded-lg font-medium cursor-pointer shadow-md text-lg py-2 px-4">Find internships</div></Link>
        <Link href="#" passHref><div className="text-lg font-medium p-2 cursor-pointer">Join</div></Link>
      </div>
      </div> 
      <h1 className="md:text-4xl text-2xl text-center pt-6" id="#explore">What we Offer?</h1>
    <div className="md:grid-cols-3 grid grid-cols-1 sm:grid-cols-2">
      <div className="sm:mx-8 mb-16 mt-8 rounded-md text-center">
          <h1 className="md:text-4xl sm:text-2xl text-xl p-4 font-medium">Internships</h1>
          <img className="h-24 w-24 mx-auto" src="/img/people-4386248.svg" alt="calendar icon" />
          <p className="md:text-lg text-base px-4 pt-4 pb-2">Teenternz provides internships for students, young professionals and young entrepreneurs. We have a large network of NGOs and Non-profit organisations who are willing to offer internships to our students.
          </p>
      </div>

      <div className="sm:mx-8 mb-16 mt-8 rounded-md text-center">
          <h1 className="md:text-4xl sm:text-2xl text-xl p-4 font-medium">Events</h1>
          <img className="h-24 w-24 mx-auto" src="/img/calendar-23684.svg" alt="calendar icon" />
          <p className="md:text-lg text-base px-4 pt-4 pb-2">we bring young achievers in our events, where you can watch them and ask your questions. These events are open to all, and we are always looking for new events to add.
          </p>
      </div>

      <div className="sm:mx-8 mb-16 mt-8 rounded-md text-center">
          <h1 className="md:text-4xl sm:text-2xl text-xl p-4 font-medium">Articles</h1>
          <img className="h-24 w-24 mx-auto" src="/img/notes-150587.svg" alt="calendar icon" />
          <p className="md:text-lg text-base px-4 pt-4 pb-2">Our articles are written by our students and professionals. Our team of writers are always ready givr you the best content, tips and tricks to help you in your study and career.</p>
      </div>
      </div>
    </>
  )
}
