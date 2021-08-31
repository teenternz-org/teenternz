import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Generous_Kitchen = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">GENEROUS KITCHEN</h1>
    <div className="mt-8">
    <p>Generous Kitchen is a student-led organization that aims to fight hunger for the underprivileged children and people of Jakarta, Indonesia. Hunger is one of the leading problems in the world and we strive to help those in need by providing food and resources for free. We run on donations and would greatly appreciate your efforts in supporting the future generation of young adults.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers<br />- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0vCiOxIBHxwvp10XR7Xxh47GpFIgJuNyFtzl_rdSoweHuQA/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/generouskitchen/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://freepantryindo.wixsite.com/generouskitchen" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Generous_Kitchen
