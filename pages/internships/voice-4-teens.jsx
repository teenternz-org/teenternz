import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Voice_4_Teens = () => {
  return (
    <>
     <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">VOICE4TEENS</h1>
    <div className="mt-8">
    <p>an online initiative that strives to amplify teenage voices of our generation. exposing teens to opportunities and inspiring them through a weekly podcast and magazine. we also emphasize mental health</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScuxHKjShPwTCrvEQOnfk2Dl4dD6Im7rLDnMsCwzQ0V91zTJQ/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/voice4teensproject/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://linktr.ee/voice4teensproject" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div> 
    </>
  )
}

export default Voice_4_Teens
