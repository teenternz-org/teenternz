import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const The_Communitys_Truth = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">THE COMMUNITY TRUTH</h1>
    <div className="mt-8">
    <p>A group of teens who want to help spread awareness for social issues.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScxFDPBo51RRKfHRA1wGshS4iQq5vxWvcDFrB_TTo5iMTCGMg/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/thecommunitytruth/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://thecommunitytruth.carrd.co/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default The_Communitys_Truth
