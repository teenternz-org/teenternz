import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes'

export default function Home() {
  const {systemTheme, theme, setTheme} = useTheme()
  return (
    <>
      <Head>
        <title>Teenternz</title>
        <meta name="description" content="Platform to find remote internships and volunteer opportunities by NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" md:p-16 dark:bg-black p-8 sm:my-24 my-16 align-middle justify-items-center">
        <h1 className="font-bold dark:text-white md:text-5xl text-center text-3xl sm:text-4xl">
        Platform to find <span className={styles.gredientText}>remote internships and volunteer opportunities</span> by NGOs
        </h1>
        <p className="font-normal text-center mt-4 mb-8 sm:text-lg text-gray-700">Teenternz helps Students find Remote Internships and volunteer opportunites from around the globe. Apart from that Students can find various resources such as articles, books.</p>
        {theme === 'light' && <button className="text-black" onClick={() => setTheme('dark')}>
         
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>
          
        
        </button>}
        {theme === 'dark' && <button className="text-white" onClick={() => setTheme('light')}>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
</svg>
        
        
        </button>}
      <div className="flex flex-1 justify-center">
        <Link href="/internships" passHref><div className="bg-blue-500 text-white rounded-lg font-medium hover:scale-110 hover:shadow-xl hover:font-semibold transition-transform cursor-pointer shadow-md text-base p-2.5 my-0.5">Find opportunities</div></Link>
      </div>

      </div> 
      <h1 className="md:text-3xl text-2xl text-center font-medium pt-6" id="#explore">What we Offer?</h1>

      <div className="md:mx-16 mx-4 grid sm:grid-cols-2 space-x-8 grid-cols-1">

        <div><img className="md:h-80 mx-auto md:my-36 sm:my-24 my-16" src="/img/undraw_Job_hunt_re_q203.svg" alt="calendar icon" /></div>
        <div><p className="md:text-xl text-center text-lg sm:my-16 my-4 sm:py-24 py-16 md:py-36 mr-7">Teenternz provides internships for students, young professionals and young entrepreneurs. We have a large network of NGOs and Non-profit organisations who are willing to offer internships to our students.</p></div>
    

          <div className=""><p className="md:text-xl text-lg sm:my-16 my-8 sm:py-24 py-16 md:py-36 text-center mr-7">We bring young achievers in our events, where you can watch them and ask your questions. These events are open to all, and we are always looking for new events to add.</p></div>
          <div className="row-start-3 sm:col-start-2 sm:row-start-2 md:mt-36 sm:mt-24 mt-16"><img className="md:h-80 mx-auto" src="/img/undraw_Events_re_98ue.svg" alt="calendar icon" /></div>


        <div><img className="md:h-80 mx-auto md:mt-36 sm:mt-24 mt-16" src="/img/undraw_Online_articles_re_yrkj.svg" alt="calendar icon" /></div>
        <div><p className="md:text-xl mr-7 text-center text-lg sm:my-16 my-8 sm:py-24 py-16 md:py-36">Our articles are written by our students and professionals. Our team of writers are always ready givr you the best content, tips and tricks to help you in your study and career.</p></div>
        
      </div>
      {/* Extra space */}
      <div className="h-16"></div>
    </>
  )
}
