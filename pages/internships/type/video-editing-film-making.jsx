import VJS_NavBar from '../../../components/vanilla-js/vjs-navbar'
import Link from 'next/link'

const Video_Editing_Film_Making = () => {
  return (
    <>
    <VJS_NavBar />
      <h1 className="text-center text-4xl m-8"
    >
    FIND FILM-MAKING/VIDEO EDITING INTERNSHIPS HERE!</h1>

    <br /><br />


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/simply-neuroscience"><a><img src="/org/simply-neuroscience.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium">Simply neuroscience</h1>
            <p className="text-sm">Hiring 
                Volunteers
            </p>
        </div>
    </div>

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/empowering-med"><a><img src="/org/empowering-med.png" alt="logo" width="90px" height="90px"/></a></Link> 
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium">Empowering med</h1>
            <p className="text-sm">Hiring 
                Interns, Members, Volunteers
            </p>
        </div>
    </div>
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/jaat"><a><img src="/org/jaat.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >JAAT</h1>
            <p className="text-sm">Hiring 
                Interns, Members
            </p>
        </div>
    </div>



    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
        <Link href="/internships/amers"><a><img src="/org/amers.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >AMERS</h1>
            <p className="text-sm">Hiring 
                Volunteers
            </p>
        </div>

    </div>
    

        


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/bright-her-future"><a><img src="/org/bright-her-future.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >BRIGHTHER FUTURE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/touche"><a><img src="/org/touche.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1>TOUCHE</h1>
                <p>Hiring 
                    Interns
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/magnify-you"><a><img src="/org/magnify-you.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >MAGNIFY YOU </h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/we-are-the-change"><a><img src="/org/we-are-the-change.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >WE ARE THE CHANGE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Video_Editing_Film_Making
