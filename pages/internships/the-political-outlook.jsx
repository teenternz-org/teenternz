import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const The_Political_Outlook = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">THE POLITICAL OUTLOOK</h1>
    <div className="mt-8">
    <p>The Political Outlook is an online blog started by two high school juniors who aims to raise awareness and make an impact through articles and social media. We live in the era, of technological advancement where a single tweet can change our point of view, hence it is often hard to realize that it has
                created an echo chamber. The Political Outlook aims to break this echo-chamber
                by writing without fear or favors. We believe in unbiased opinions that not only help us know the world better but they can also help spread awareness.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers<br />- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWK1Ra8TvUx_mz8V6KSfmIndFkFrDq7XWcPbXpcT-T0ccRgg/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/the.political.outlook_/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://thepoliticaloutlook.carrd.co/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default The_Political_Outlook
