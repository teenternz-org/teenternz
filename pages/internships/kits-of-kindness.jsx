import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Kits_Of_Kindness = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">KITS OF KINDNESS</h1>
    <div className="mt-8">
    <p>
                Kits of Kindness is a community organisation that provides free 
                care packages to marginalised communities that have been affected
                economically during the COVID-19 pandemic. We believe The COVID-19
                pandemic has had devastating effects on the welfare of our people,
                and our team would like to help those in need to get through this
                difficult time by providing a help kit that consists of food and other
                essentials.


            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2GSARkntAyJOK9L9F7tnnBwAWcb0_lSwtAgdaXqJYQYaXPw/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>

        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.instagram.com/kitsofkindness.my/" rel="noreferrer" target="_blank">
                Instagram!</a>
            </button>
        
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://www.kitsofkindness.my/" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Kits_Of_Kindness
