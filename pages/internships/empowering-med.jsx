import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Empowering_Med = () => {
  return (
    <>
     <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">EMPOWERING MED</h1>
    <div className="mt-8">
    <p>EmpoweringMED serves as a platform to connect like-minded individuals, develop their passion, and provide
                free resources and support for aspiring pre meds all around the world to pursue their dreams.
            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers <br /> - Interns<br /> Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://forms.gle/R9NAD73YZYHNfEVj7" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/empoweringmed/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://empoweringmed.wixsite.com/official" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div> 
    </>
  )
}

export default Empowering_Med
