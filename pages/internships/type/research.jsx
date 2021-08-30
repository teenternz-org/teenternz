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
        <div className="rounded-md overflow-hidden">
           <Link href="/internships/simply-neuroscience"><a><img src="/org/sn.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium">Simply neuroscience</h1>
            <p className="text-sm">Hiring 
                Volunteers
            </p>
        </div>
    </div>

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-md overflow-hidden">
           <Link href="/internships/empowering-med"><a><img src="/org/empoweringmed.png" alt="logo" width="90px" height="90px"/></a></Link> 
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium">Empowering med</h1>
            <p className="text-sm">Hiring 
                Interns, Members, Volunteers
            </p>
        </div>
    </div>
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-md overflow-hidden">
           <Link href="/internships/jaat"><a><img src="/org/jaat.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >JAAT</h1>
            <p className="text-sm">Hiring 
                Interns, Members
            </p>
        </div>
    </div>
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-md overflow-hidden">
        <Link href="/internships/mind-boggle"><a><img src="/org/jaat.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >MINDBOGGLE</h1>
            <p className="text-sm">Hiring 
                Volunteers, Members
            </p>
        </div>
    </div>

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-md overflow-hidden">
            <a href="myforme.html"><img src="/org/myforme.png" alt="logo" width="90px" height="90px"/></a>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >MY FOR ME </h1>
            <p className="text-sm">Hiring Volunteers, Members, Interns
            </p>
        </div>
    </div>

    

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-md overflow-hidden">
            <a href="magnifyou.html"><img src="/org/Pune (3).png" alt="logo" width="90px" height="90px"/></a>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >MAGNIFY YOU </h1>
            <p className="text-sm">Hiring Volunteers, Members
            </p>
        </div>
    </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="youunited.html"><img src="/org/YouUnitedLogo.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >YOU UNITED</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="Queer Youth Rises.html"><img src="/org/queerrisesyout.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
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
