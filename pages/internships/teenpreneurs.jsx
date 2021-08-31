import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Teenpreneurs = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">TEENPRENEURS</h1>
    <div className="mt-8">
    <p>Teenpreneurs is a newly-founded company by teenagers with a common motive to support other aspiring teenage entrepreneurs. Cresence, our soon to be launched e-commerce website will help small business owners to sell their products efficiently.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Interns</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYWf_2GszkVA8pbuDnN7x0aw0lmDmmiTLnjWzf7-MdnDv8mg/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/teenpreneurs_/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>

        </div>
    </div>
</div>
    </>
  )
}

export default Teenpreneurs
