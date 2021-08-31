import VJS_NavBar from '../../../components/vanilla-js/vjs-navbar'
import Link from 'next/link'

const Research = () => {
  return (
    <>
    <VJS_NavBar />
    <h1 className="text-center text-4xl m-8"
    >
    FIND RESEARCH INTERNSHIPS HERE!</h1>

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
        <Link href="/internships/mind-boggle"><a><img src="/org/mind-boggle.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >MINDBOGGLE</h1>
            <p className="text-sm">Hiring 
                Volunteers, Members
            </p>
        </div>
    </div>

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
        <Link href="/internships/my-for-me"><a><img src="/org/my-for-me.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium" >MY FOR ME </h1>
            <p className="text-sm">Hiring Volunteers, Members, Interns
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
            <Link href="/internships/you-united"><a><img src="/org/you-united.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >YOU UNITED</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/queer-youth-rises"><a><img src="/org/queer-youth-rises.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >QUEER YOUTH RISES</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        </div>

    </>
  )
}

export default Research
