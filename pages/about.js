import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className=" m-16 text-center font-medium text-2xl md:text-4xl">About Teenternz</h1>
      <p className="text-xl md:mx-36 sm:mx-24 text-center mx-16">Teenternz is a platform for students and organisations. 
      Here at teenternz we connect students with Organizations to provide them remote Internships and       volunteer opportunities. 
        
      We bring NGOs and Non-profit organisations to provide students with a lot of opportunities such as      Internships and Volunteer opportunities. 
        
      Teenternz was founded in July 2021 and the main aim behind it was to provide students with      opportunities. As of now we have 60 organizations partnered with us to provide opportunities to     students. 
        
      Since, during the ongoing pandemic students have faced a lot of difficulties and there was a lack of      opportunities, we built a platform for students where they can find Remote internships and      volunteers.
</p>
      <h1 className=" m-16 text-center font-medium mt-28 text-3xl">Our Team</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 m-16">
          <div className="grid grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/sanskriti-jain.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Sanskriti Jain<br /><span className="font-normal text-blue-500">Founder</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/ayisha-necholi.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Ayisha Necholi<br /><span className="font-normal text-blue-500">Executive Assistant</span>
              </p>
              <div className="flex flex-1 mt-2 space-x-2 justify-center">
                <div className="cursor-pointer">
                  <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=ayishanecholiofficial@gmail.com&hl=en" target="_blank" rel="noreferrer"><img src="/about-us/icons8-gmail.svg" alt="" /></a>
                </div>
                <div className="cursor-pointer">
                  <a href="https://www.instagram.com/ayishanecholisocial_/" target="_blank" rel="noreferrer"><img src="/about-us/icons8-instagram.svg" alt="" /></a>
                </div>
                <div className="cursor-pointer">
                  <a href="https://www.linkedin.com/in/ayisha-necholi-ab5115202" target="_blank" rel="noreferrer"><img src="/about-us/icons8-linkedin.svg" alt="" /></a>
                </div>
                <div className="cursor-pointer">
                  <a href="https://youtube.com/channel/UCpVVEwMhc9MuIo5fs0iU7fQ" target="_blank" rel="noreferrer"><img src="/about-us/icons8-youtube.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/tejas-chaudhari.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Tejas Chaudhari<br /><span className="font-normal text-blue-500">Software Developer</span>
              </p>
              <div className="flex flex-1 mt-2 space-x-2 justify-center">
              <div className="cursor-pointer">
                  <a href="https://twitter.com/tejasc0" target="_blank" rel="noreferrer"><img src="/about-us/icons8-twitter.svg" alt="" /></a>
                </div>
                <div className="cursor-pointer">
                  <a href="https://github.com/tejasc0" target="_blank" rel="noreferrer"><img src="/about-us/icons8-github.svg" alt="" /></a>
                </div>
                <div className="cursor-pointer">
                  <a href="https://dev.to/tejasc0" target="_blank" rel="noreferrer"><img src="/about-us/icons8-news.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:col-start-2 lg:col-start-4 grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/kunal-aggarwal.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Kunal Aggarwal<br /><span className="font-normal text-blue-500">Community Manager</span>
              </p>
            </div>
          </div>
          
      </div>
    </>
  )
}

export default About
