const About = () => {
  return (
    <>
      <h1 className=" m-16 text-center font-medium text-4xl">About Teenternz</h1>
      <p className="text-xl md:mx-36 sm:mx-24 mx-16">Teenternz is a startup founded by Sanskriti Jain to help Students find Remote Internships and volunteer opportunites from around the globe.</p>
      <h1 className=" m-16 text-center font-medium mt-28 text-3xl">Our Team</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 m-16">
          <div className="grid grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/team/sanskriti-jain.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Sanskriti Jain<br /><span className="font-normal text-blue-500">Founder</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/team/ayisha-necholi.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Ayisha Necholi<br /><span className="font-normal text-blue-500">Executive Assistant</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/team/tejas-chaudhari.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Tejas Chaudhari<br /><span className="font-normal text-blue-500">Fullstack Developer</span>
              </p>
            </div>
          </div>
          <div className="grid md:col-start-2 lg:col-start-4 grid-cols-1">
            <div className="mx-auto">
              <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/team/kunal-aggarwal.jpg" alt="" />
            </div>
            <div className=" p-5">
              <p className="font-semibold text-center">
              Kunal Aggarwal<br /><span className="font-normal text-blue-500">Moderator</span>
              </p>
            </div>
          </div>
          
      </div>
    </>
  )
}

export default About
