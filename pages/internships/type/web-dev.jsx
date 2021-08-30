import VJS_NavBar from '../../../components/vanilla-js/vjs-navbar'
import Link from 'next/link'

const Web_Dev = () => {
  return (
    <>
    <VJS_NavBar />
    <h1 className="text-center text-4xl m-8"
    >
    FIND WEB DEVELOPMENT INTERNSHIPS HERE!</h1>

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

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-md overflow-hidden">
        <Link href="/internships/magnify-you"><a><img src="/org/empoweringmed.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium">MAGNIFY YOU </h1>
            <p className="text-sm">Hiring Volunteers, Members
            </p>
        </div>
    </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
            <Link href="/internships/bright-her-future"><a><img src="/org/empoweringmed.png" alt="logo" width="90px" height="90px"/></a></Link> 
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >BRIGHTHER FUTURE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="youunited.html"><img src="/org/YouUnitedLogo.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium">YOU UNITED</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>
        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="mindspace.html"><img src="/org/mindspace.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium">MIND SPACE</h1>
                <p className="text-sm">Hiring Volunteers
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="queenmaryanatomy.html"><img src="/org/queenmary.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium">QUEEN MARY ANATOMY</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="Queer Youth Rises.html"><img src="/org/queerrisesyout.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium">QUEER YOUTH RISES</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="Generouskitchen.html"><img src="/org/gk.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium">GENEROUS KITCHEN</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Web_Dev
