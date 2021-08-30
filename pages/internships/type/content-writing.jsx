import VJS_NavBar from '../../../components/vanilla-js/vjs-navbar'
import Link from 'next/link'

const Content_Writing = () => {
  return (
    <>
    <VJS_NavBar />
    <h1 className="text-center text-4xl m-8">FIND CONTENT WRITING INTERNSHIPS HERE!</h1><br /><br />

    <div className="grid grid-cols-4">

      <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-md overflow-hidden">
          <Link href="/internships/bloody-donuts"><a><img src="/org/bloodyDonuts.png"  alt="logo"width="90px"height="90px"/></a></Link>
        </div>
        <div className="text-left ml-0">
          <h1 className="text-lg font-medium">Bloody Donuts</h1>
          <p className="text-sm">Hiring
            Interns, Volunteers
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
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-md overflow-hidden">
           <a href="mindboggle.html"><img src="/org/mindboggle.png" alt="logo" width="90px" height="90px"/></a> 
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >MINDBOGGLE</h1>
            <p className="">Hiring 
                Volunteers, Members
            </p>
        </div>
    </div>
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
        <div className="rounded-md overflow-hidden">
           <a href="myforme.html"><img src="/org/myforme.png" alt="logo" width="90px" height="90px"/></a> 
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >MY FOR ME</h1>
            <p className="text-sm">Hiring 
                Interns, Volunteers, Members
            </p>
        </div>
    </div>
    
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-3">
        <div className="rounded-md overflow-hidden">
            <a href="magnifyou.html"><img src="/org/Pune (3).png" alt="logo" width="90px" height="90px"/></a>
        </div>
        <div className="text-left ml-0">
            <h1 className="text-lg font-medium" >MAGNIFY YOU </h1>
            <p className="text-sm">Hiring Volunteers, Members
            </p>
        </div>
    </div>
        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-md overflow-hidden">
                <a href="scalarnews.html"><img src="/org/SCALAR NEWS (2).png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="internship-type-temp-card-h1" >SCALAR NEWS</h1>
                <p className="text-sm">Hiring Interns
                </p>
            </div>
        </div>

           
        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-md overflow-hidden">
                <a href="youthmedicinetoday.html"><img src="/org/YM.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="internship-type-temp-card-h1" >YOUTHMEDICINE TODAY</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-md overflow-hidden">
                <a href="innovxplorers.html"><img src="/org/innovxplorers.jpg" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >INNOVXPLORERS</h1>
                <p className="text-sm">Hiring Volunteers, members, Interns
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
            <div className="rounded-md overflow-hidden">
                <a href="thegraveyardzine.html"><img src="/org/the graveyard zine (1).png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >THE <br />GRAVEYARD ZINE</h1>
                <p className="text-sm">Hiring 
                 Volunteers
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-5">
            <div className="rounded-md overflow-hidden">
                <a href="amers.html"><img src="/org/amers.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >AMERS</h1>
                <p className="text-sm">Hiring 
                    Volunteers
                </p>
            </div>

        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-1">
            <div className="rounded-md overflow-hidden">
                <a href="touche.html"><img src="/org/touche.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1>TOUCHE</h1>
                <p>Hiring 
                    Interns
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-md overflow-hidden">
                <a href="brightherfuture.html"><img src="/org/brightherfuture.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >BRIGHTHER FUTURE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" >
            <div className="rounded-md overflow-hidden">
                <a href="tct.html"><img src="/org/thecommunitystruth.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >THE COMMUNITY&apos;S TRUTH</h1>
                <p className="text-sm">Hiring 
                    Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-4">
            <div className="rounded-md overflow-hidden">
                <a href="voice4teens.html"><img src="/org/voice4teens official logo.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >VOICE4TEENS</h1>
                <p className="text-sm">Hiring Volunteers
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200" id="card-3">
            <div className="rounded-md overflow-hidden">
                <a href="Queer Youth Rises.html"><img src="/org/queerrisesyout.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="" >QUEER YOUTH RISES</h1>
                <p className="">Hiring Volunteers, Members
                </p>
            </div>
        </div>


        <div className="m-4 shadow-lg rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-md overflow-hidden">
                <a href="wearethechange.html"><img src="/org/wearethechange.png" alt="logo" width="90px" height="90px"/></a>
            </div>
            <div className="text-left ml-0">
                <h1 className="text-lg font-medium" >WE ARE THE CHANGE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content_Writing
