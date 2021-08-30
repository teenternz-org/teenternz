import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Open_Call_For_Artists = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">OPEN CALL FOR ARTISTS</h1>
    <div className="mt-8">
    <p>Open Call for Artists (@opencallforartists) was founded in 2019 on Instagram&apos;s platform that serves as a
                directory of art open calls worldwide. With over 8,000 followers, including galleries, curators and
                museums – the directory provides opportunities to those that are statistically underrepresented in the
                arts, such as women, LGBTQIA+, BIPOC, emerging, and low-income artists.</p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/opencallforartists/" rel="noreferrer" target="_blank">
                Instagram</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Open_Call_For_Artists
