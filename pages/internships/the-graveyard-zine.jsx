import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const The_Graveyard_Zine = () => {
  return (
    <>
     <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">THE GRAVEYARD ZINE</h1>
    <div className="mt-8">
        <p>The graveyard zine aims to pay tribute to the past and future artists of the planet earth. We feature upcoming artists while at the same time honor the past artists who have come before us. We here at the graveyard zine wish to rekindle the public&apos;s love for the arts.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://forms.gle/sfiEQvZMpv45jrm79" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/thegraveyardzine/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://linktr.ee/thegraveyardzine" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div> 
    </>
  )
}

export default The_Graveyard_Zine
