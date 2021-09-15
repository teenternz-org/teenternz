import Internships_type from '../../../components/layouts/internships-type'
import Link from 'next/link'
import Head from 'next/head'

const Web_Dev = () => {
  return (
    <Internships_type>
                  <Head>
        <title>Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1 className="text-center text-4xl m-8"
    >
    FIND WEB DEVELOPMENT INTERNSHIPS HERE!</h1>

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

    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
        <Link href="/internships/magnify-you"><a><img src="/org/magnify-you.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
            <h1 className="text-lg font-medium">MAGNIFY YOU </h1>
            <p className="text-sm">Hiring Volunteers, Members
            </p>
        </div>
    </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/bright-her-future"><a><img src="/org/bright-her-future.png" alt="logo" width="90px" height="90px"/></a></Link> 
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium" >BRIGHT HER FUTURE</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/you-united"><a><img src="/org/you-united.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium">YOU UNITED</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>
        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/mindspace"><a><img src="/org/mindspace.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium">MIND SPACE</h1>
                <p className="text-sm">Hiring Volunteers
                </p>
            </div>
        </div>


        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/queen-mary-anatomy"><a><img src="/org/queen-mary-anatomy.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium">QUEEN MARY ANATOMY</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/queer-youth-rises"><a><img src="/org/queer-youth-rises.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium">QUEER YOUTH RISES</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

        <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
            <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
            <Link href="/internships/generous-kitchen"><a><img src="/org/generous-kitchen.png" alt="logo" width="90px" height="90px"/></a></Link>
            </div>
            <div className="m-2">
                <h1 className="text-lg font-medium">GENEROUS KITCHEN</h1>
                <p className="text-sm">Hiring Volunteers, Members
                </p>
            </div>
        </div>

    </div>
    </Internships_type>
  )
}

export default Web_Dev
