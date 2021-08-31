import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const You_United = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">YOU UNITED</h1>
    <div className="mt-8">
    <p>YouUnited is an organization dedicated to providing students from middle school to college with a variety of opportunities such as scholarships, competitions, awards, internships, volunteer opportunities and study resources.
            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers <br /> - Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoVd_WCIwvDSLYXxOsk3dmeRLPB8dARr-pwpYUbqyhPYB2TA/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/mindspace_org/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.youunited.org/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default You_United
