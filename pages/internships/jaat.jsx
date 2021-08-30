import VJS_NavBar from "../../components/vanilla-js/vjs-navbar"
import Link from "next/link"

const Jaat = () => {
  return (
    <>
    <VJS_NavBar />
    <div className="text-center mx-72">
    <h1 className="text-4xl mt-8">
    JAAT
    </h1>
    <div className="mt-8">
    <p>Just Ask A Teen is an advice page where common or unique issues are solved and spoken to. It's also where you can write rants and personal stories that you need to get out. It's a safe community and everyone's identity is protected. We also conduct interviews and podcasts. We also have an opportunity hub updated regularly with paid internships/programs.</p>
    <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
    <p className="mt-2">
    - Interns <br /> - Volunteers
    </p>
    <p className="font-medium m-4">
                Apply now:
            </p>
    <div className="mt-2">
                <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md"><Link href="https://docs.google.com/forms/d/e/1FAIpQLScl_YwBoy6Rb_LUug6PL7WQ4DCu-UnNNp3dUcIN-C4tIMQvBQ/viewform"  target="_blank"><a>Register</a></Link>
                  </button>
    
    <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md"><a href="
    https://www.instagram.com/just.ask.a.teen/
    " rel="noreferrer" target="_blank">   
    Instagram</a></button>
    
    </div>
    </div>
    </div>
    </>
    )
    }
    export default Jaat
