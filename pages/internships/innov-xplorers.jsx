import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Innov_Xplorers = () => {
  return (
    <>
     <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">INNOVXPLORERS</h1>
    <div className="mt-8">
    <p>InnovXplorers is a platform through which students can acquire 21st-century 
            skills, including Emotional Intelligence, Leadership and Critical Thinking skills.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Interns <br /> - Volunteers<br />- Members</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.innovxplorers.org/join-our-team" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/InnovXplorers/?hl=en" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.innovxplorers.org/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div> 
    </>
  )
}

export default Innov_Xplorers
