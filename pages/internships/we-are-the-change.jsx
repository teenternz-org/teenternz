import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const We_Are_The_Change = () => {
  return (
    <>
     <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">WE ARE THE CHANGE</h1>
    <div className="mt-8">
    <p>We Are The Change is a non-profit organization run by high school teenagers. Their motto is to create a happy and healthy environment for a community. They like to discuss and talk about different social issues and daily life problems faced by the youth today.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers<br />- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSh19_ate8MtiFFiMhaZ39T4pgrhkHRqY4YeghacOaiIk8Kg/closedform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/wearethechangeteam/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>

        </div>
    </div>
</div> 
    </>
  )
}

export default We_Are_The_Change
