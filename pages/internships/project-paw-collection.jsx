import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Project_Paw_Collection = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">Project Paw Collective</h1>
    <div className="mt-8">
    <p>Project Paw Collective is a youth-led organization that aims to help and protect Jakarta’s stray animals through street-feeding, bathing, and possible sheltering. We envision a safe and cared for lifestyle for stray animals. 
            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers <br /> - Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfo3rS4r5VhX8z-wl-YOHqVIa_UiX-WMjCE5G4ZEBJQANNQxQ/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://instagram.com/projectpawlective?utm_medium=copy_link" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://projectpawcollective.carrd.co/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Project_Paw_Collection
