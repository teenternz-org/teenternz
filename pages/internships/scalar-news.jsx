import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Scalar_News = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">SCALAR NEWS</h1>
    <div className="mt-8">
    <p>Scalar News is a daily news update service that promote news under 50 words via WhatsApp and Instagram.

We are a student run organization and our main goal is to provide news in such a way that anyone of any age can read it and be able to understand it.

We currently have more than 750 readers on WhatsApp.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Interns</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScjUxoQN5QsDNRQSsKSF7_j74auqZrxeYEhaS-tQattv98ksA/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/scalar_news/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://linktr.ee/scalar_news" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Scalar_News
