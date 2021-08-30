import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Simply_Neuroscience = () => {
  return (
    <>
     <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">SIMPLY NEUROSCIENCE</h1>
    <div className="mt-8">
    <p>Simply Neuroscience is an international student-led organization dedicated to fostering students'
                interdisciplinary interests in the brain, specifically through neuroscience and psychology education,
                outreach, and awareness. Our aim is to empower youth to engage in brain-related fields through projects
                and initiatives on local through global scales. Overall, we work to increase early neuroscience
                accessibility through connecting students with free online resources, opportunities, events, mentorship,
                and more through our diverse array of 25 departmental initiatives.
            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://form.typeform.com/to/y8ouTz?typeform-source=chinmayibalusu.typeform.com" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/simplyneuroscience/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.simplyneuroscience.org/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div> 
    </>
  )
}

export default Simply_Neuroscience
