import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Bright_Her_Future = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">BRIGHT HER FUTURE</h1>
    <div className="mt-8">
    <p>BrightHer Future is an international student-led organization with a mission to bridge the gender and opportunity gap in education by making a high quality of personal, academic, and career development equitable, inclusive and easily accessible to girls - especially those from low-income and minority backgrounds - all over the world.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers<br />- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfigC96GXu2PmgJ3mEcWS-wWn8VzE6oH2FBNJnfedV4dgcZFw/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/brightherfuture/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://linktr.ee/brightherfuture" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Bright_Her_Future
