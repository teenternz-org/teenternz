import VJS_NavBar from "../../components/vanilla-js/vjs-navbar"

const Bloody_Donuts = () => {
  return (
    <>
    <VJS_NavBar />
    <div className="text-center mx-72">
    <h1 className="text-4xl mt-8">BLOODY DONUTS</h1>
    <div className="mt-8">
        <p>We are a platform for young and creative artists, writers and poets, from all genders, races and walks of
            life. Through our engaging website, Instagram page and magazine, young and aspiring souls are offered a
            platform to speak their minds on diverse and sensitive topics, making their voices heard. We have always
            been committed to building a flourishing community of creative minds and this is just the beginning for
            us.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers <br /> - Interns</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT7H6xK4Y92M1xhaAhDmf8Ex3QPxhTRx3O2M3dzyNUulMywQ/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/bloodydonuts.in/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.bloodydonuts.in" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Bloody_Donuts
