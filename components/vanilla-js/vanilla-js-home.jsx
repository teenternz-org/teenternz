import Link from 'next/link'
import VJS_Articles_Recent_6 from './vjs-articles-recent-6'

const Vanilla_JS_Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen md:bg-hero-md sm:hero-sm bg-hero-mobile bg-cover">
    
    <div className="md:font-bold md:text-5xl text-white md:m-12 font-medium text-2xl m-6 sm:text-3xl">
    Platform to find remote internships and volunteer opportunities provided by NGOs and Non-profit organisations 
    </div>
    
    </div>

      {/* Explore */}
      
    <div className="bg-explore-md bg-cover">

    <div className="">
      <h1 className="text-white md:text-4xl text-2xl text-center pt-3">What we Offer?</h1>
    <div className="md:grid-cols-3 grid grid-cols-1 sm:grid-cols-2">
      <div className="bg-blue-300 mx-16 mb-16 mt-8 rounded-md text-center">
        <div className="">
          <h1 className="md:text-4xl text-xl p-4 font-medium">Internships</h1>
          <img className="align-middle h-28 m-3 mx-auto" src="/img/people-4386248.svg" alt="calendar icon" />
          <p className="md:text-lg text-base px-4 pt-4 pb-2">Teenternz provides internships for students, young professionals and young entrepreneurs. We have a large network of NGOs and Non-profit organisations who are willing to offer internships to our students.
          </p>
          <Link href="/internships"><button className="mt-1 bg-white m-2 p-2 rounded-full">See all internships</button></Link>
        </div>
      </div>

      <div className="bg-blue-300 mx-16 mb-16 mt-8 rounded-md text-center">

        <div className="">
          <h1 className="md:text-4xl text-xl p-4 font-medium">Events</h1>
          <img className="mx-20 my-3" src="/img/calendar-23684.svg" alt="calendar icon" />
          <p className="md:text-lg text-base px-4 pt-4 pb-2">

          we bring young achievers in our events, where you can watch them and ask your questions. These events are open to all, and we are always looking for new events to add.
          </p>
          <Link href="/events"><button className="mt-1 bg-white m-2 p-2 rounded-full">Explore</button></Link>
        </div>
      </div>

      <div className="bg-blue-300 mx-16 mb-16 mt-8 rounded-md text-center">
        <div className="">
          <h1 className="md:text-4xl text-xl p-4 font-medium">Articles</h1>
          <img className="mx-20 my-3" src="/img/notes-150587.svg" alt="calendar icon" />
          <p className="md:text-lg text-base px-4 pt-4 pb-2">Our articles are written by our students and professionals. Our team of writers are always ready givr you the best content, tips and tricks to help you in your study and career.</p>
          <Link href="/articles"><button className="mt-1 bg-white m-2 p-2 rounded-full">Read articles</button></Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  </>
  )
}

export default Vanilla_JS_Home;