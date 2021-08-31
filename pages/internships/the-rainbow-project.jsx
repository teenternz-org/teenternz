import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const The_Rainbow_Project = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">THE RAINBOW PROJECT</h1>
    <div className="mt-8">
    <p>The Rainbow Project is an organization that wishes to raise awareness about social issues, we focus on LGBTQIA+ issues, feminism and gender equality .</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Interns</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKe-DGVTHsRy02bvXRglsfAbJqa8bUM_VPi6Uy-HxpcX_uoQ/viewform?entry.1576310079=Anan" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/the.rainbow.project.in/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
 
        </div>
    </div>
</div>
    </>
  )
}

export default The_Rainbow_Project
