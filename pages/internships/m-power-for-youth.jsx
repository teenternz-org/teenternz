import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const M_Power_For_Youth = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">MPOWER FOR YOUTH</h1>
    <div className="mt-8">
    <p>MPower For Youth is an entirely student run youth empowerment initiative. Our focus on empowerment revolves around our 3 Es, expression, education and employment.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Interns</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/magnifyyou_pune/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.mpowerforyouth.org/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default M_Power_For_Youth
