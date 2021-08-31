import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Queen_Mary_Anatomy = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">QUEEN MARY ANATOMY</h1>
    <div className="mt-8">
    <p>
                This Organization is a coaching business that has the purpose of teaching human anatomy and physiology
                to health professionals and students, as well as teaching the study techniques. We believe in free
                education for all.
            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Interns</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
              
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/queenmaryanatomy/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://linktr.ee/queenmaryanatomy" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Queen_Mary_Anatomy
