import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Speak_What_You_Wear = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">SPEAK WHAT YOU WEAR</h1>
    <div className="mt-8">
    <p>
                About the Organisation
                Speak What You Wear is a unique youth-led organization engaging in discussion with style! Our mission is to speak up for problems and biases that affect women and non-binary people of color! We dedicate ourselves to spreading awareness about issues that need to be brought to light.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScrbi7bV68-gDW5UXAb-Na3jyQwFvXZrmIn86B3PU8uQOoDWQ/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/speakwhatyouwear/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://speakwhatyouwear.wixsite.com/swyw" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Speak_What_You_Wear
