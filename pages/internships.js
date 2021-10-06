import Link from 'next/link'
import Head from 'next/head'

const Internships = () => {
  return (
    <>
      <Head>
        <title>Internships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-16 text-lg md:text-xl font-medium ">New</div>
      
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      <div className="col-span-3">

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-3">
          <div className="m-4 grid grid-cols-2">

        <div className="h-20 w-20 m-2">
           <Link href="/internships/sight-for-explore-eyes"><a><img src="/org/sight-for-explore-eyes.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
        <p className="text-lg font-medium">
                        Interns, Members
            </p>
            <h1 className="text sm">Sight for Explore Eyes</h1>
        </div>
    </div>

    <div className="m-4 grid grid-cols-2">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/bleed-without-barriers"><a><img src="/org/bleed-without-barriers.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
                      <p className="text-lg font-medium">
                        Volunteers
            </p>
            <h1 className="text sm">Bleed without barriers</h1>

        </div>
    </div>

        <div className="m-4 grid grid-cols-2">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/simply-neuroscience"><a><img src="/org/simply-neuroscience.png" alt="logo" width="90px" height="90px"/></a></Link>
        </div>
        <div className="m-2">
        <p className="text-lg font-medium"> 
                Volunteers
            </p>
            <h1 className="text sm">Simply neuroscience</h1>

        </div>
    </div>
          </div>
          
          <div className="m-16 text-lg md:text-xl font-medium col-span-3">All Internships</div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-3">
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
           <Link href="/internships/empowering-med"><a><img src="/org/empowering-med.png" alt="logo" width="90px" height="90px"/></a></Link> 
        </div>
        <div className="m-2">
            <h1 className="text sm">Empowering med</h1>
            <p className="text-lg font-medium"> 
                Interns, Members, Volunteers
            </p>
        </div>
    </div>
    <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
        <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
          <Link href="/internships/bloody-donuts"><a><img src="/org/bloody-donuts.png"  alt="logo"width="90px"height="90px"/></a></Link>
        </div>
        <div className="m-2">
          <h1 className="text sm">Bloody Donuts</h1>
          <p className="text-lg font-medium">
            Interns, Volunteers
          </p>
        </div>
      </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/open-call-for-artists"><a><img src="/org/open-call-for-artists.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">OPEN CALL FOR ARTISTS</h1>
                    <p className="text-lg font-medium">
                        Volunteers
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/jaat"><a><img src="/org/jaat.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">JAAT</h1>
                    <p className="text-lg font-medium">
                        Interns, Members
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/mind-boggle"><a><img src="/org/mind-boggle.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">MINDBOGGLE</h1>
                    <p className="text-lg font-medium">
                        Volunteers, Members
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/bizness"><a><img src="/org/bizness.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">BIZNESS</h1>
                    <p className="text-lg font-medium">
                        Volunteers
                    </p>
                </div>
            </div>



            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/m-power-for-youth"><a><img src="/org/m-power-for-youth.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">MPOWER FOR YOUTH</h1>
                    <p className="text-lg font-medium">
                        Interns
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-humanitarian-community"><a><img src="/org/the-humanitarian-community.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE HUMANITARIAN COMMUNITY</h1>
                    <p className="text-lg font-medium">
                        Interns, Volunteers
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/my-for-me"><a><img src="/org/my-for-me.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">MY FOR ME</h1>
                    <p className="text-lg font-medium">
                        Interns, Volunteers, Members
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/teenpreneurs"><a><img src="/org/teenpreneurs.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">TEENPRENEURS</h1>
                    <p className="text-lg font-medium">
                        Interns
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/magnify-you"><a><img src="/org/magnify-you.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">MAGNIFY YOU</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers
                    </p>
                </div>
            </div>




            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/scouts-daily"><a><img src="/org/scouts-daily.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">SCOUTS DAILY</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers, Interns
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/connect-org"><a><img src="/org/connect-org.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">CONNECTORG</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers, Interns
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-communitys-truth"><a><img src="/org/the-communitys-truth.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE COMMUNITY&apos;S TRUTH</h1>
                    <p className="text-lg font-medium">
                        Members
                    </p>
                </div>
            </div>





            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-graveyard-zine"><a><img src="/org/the-graveyard-zine.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE GRAVEYARDZINE</h1>
                    <p className="text-lg font-medium">
                        Volunteers
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-chatter-gals"><a><img src="/org/the-chatter-gals.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE CHATTER GALS</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers
                    </p>
                </div>
            </div>




            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-political-outlook"><a><img src="/org/the-political-outlook.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE POLITICAL OUTLOOK</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/touche"><a><img src="/org/touche.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1>TOUCHE</h1>
                    <p>
                        Interns
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/generous-kitchen"><a><img src="/org/generous-kitchen.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">GENEOUROUS KITCHEN</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/say-magzine"><a><img src="/org/say-magzine.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">SAY MAGAZINE</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers
                    </p>
                </div>
            </div>



            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/kits-of-kindness"><a><img src="/org/kits-of-kindness.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">KITS OF KINDNESS</h1>
                    <p className="text-lg font-medium">
                        Members, Volunteers
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/amers"><a><img src="/org/amers.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">AMERS</h1>
                    <p className="text-lg font-medium">
                        Volunteers
                    </p>
                </div>

            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/queen-mary-anatomy"><a><img src="/org/queen-mary-anatomy.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">QUEEN MARY ANATOMY</h1>
                    <p className="text-lg font-medium">
                        Interns
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-literary-academia"><a><img src="/org/the-literary-academia.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE LITERARY ACADEMIA</h1>
                    <p className="text-lg font-medium">
                        Volunteers, Interns
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/queer-youth-rises"><a><img src="/org/queer-youth-rises.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">QUEER YOUTH RISES</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/cosmos"><a><img src="/org/cosmos.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">COSMOS</h1>
                    <p className="text-lg font-medium"> Volunteers
                    </p>
                </div>

            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/the-rainbow-project"><a><img src="/org/the-rainbow-project.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">THE RAINBOW PROJECT</h1>
                    <p className="text-lg font-medium"> Interns
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/med-insider"><a><img src="/org/med-insider.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">MED INSIDER</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/you-united"><a><img src="/org/you-united.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">YOU UNITED</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/superposition"><a><img src="/org/superposition.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">SUPERPOSITION</h1>
                    <p className="text-lg font-medium"> Volunteers, Interns, Members
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/mindspace"><a><img src="/org/mindspace.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">MIND SPACE</h1>
                    <p className="text-lg font-medium"> Volunteers
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/innov-xplorers"><a><img src="/org/innov-xplorers.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">INNOVXPLORERS</h1>
                    <p className="text-lg font-medium"> Volunteers, members, Interns
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/scalar-news"><a><img src="/org/scalar-news.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">SCALAR NEWS</h1>
                    <p className="text-lg font-medium"> Interns
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/voice-4-teens"><a><img src="/org/voice-4-teens.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">VOICE4TEENS</h1>
                    <p className="text-lg font-medium"> Volunteers
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/bright-her-future"><a><img src="/org/bright-her-future.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">BRIGHT HER FUTURE</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/philosoph-youth"><a><img src="/org/philosoph-youth.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">PHILOSOPH YOUTH</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/codia"><a><img src="/org/codia.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">CODIA</h1>
                    <p className="text-lg font-medium"> Volunteers, Interns
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/etf-maryland"><a><img src="/org/etf-maryland.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">ETF MARYLAND</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>
            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/project-paw-collection"><a><img src="/org/project-paw-collection.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">PROJECT PAW COLLECTION</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>

            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/youth-4-scitech"><a><img src="/org/youth-4-scitech.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">YOUTH 4 SCITECH</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/speak-what-you-wear"><a><img src="/org/speak-what-you-wear.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">SPEAK WHAT YOU WEAR</h1>
                    <p className="text-lg font-medium"> Members
                    </p>
                </div>
            </div>



            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/youth-medicine-today"><a><img src="/org/youth-medicine-today.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">YOUTH MEDICINE TODAY</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>


            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/love-achelois"><a><img src="/org/love-achelois.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">LOVE ACHELOIS</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>

            <div className="m-4 shadow-xl rounded-lg grid grid-cols-2 bg-purple-200">
                <div className="rounded-full h-20 w-20 m-2 overflow-hidden">
                <Link href="/internships/we-are-the-change"><a><img src="/org/we-are-the-change.png" alt="logo" width="90px" height="90px"/></a></Link>
                </div>
                <div className="m-2">
                    <h1 className="text sm">WE ARE THE CHANGE</h1>
                    <p className="text-lg font-medium"> Volunteers, Members
                    </p>
                </div>
            </div>
            </div>
        </div>
<div>
<div className="hidden md:block -mt-24 fixed">
        <h1 className="text-xl font-medium ml-8">Categories</h1>
<div className="flex flex-wrap">
          <Link href="/internships/type/content-writing" passHref>
            <div className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Content Writing</div>
          </Link>  
        
          <Link href="/internships/type/graphics-design" passHref>
            <div className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Graphics Design</div>
          </Link>  
          <Link href="/internships/type/video-editing-and-film-making" passHref>
            <div className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Video Editing and Film Making</div>
          </Link>  
          <Link href="/internships/type/web-dev" passHref>
            <div className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Web Development</div>
          </Link>  

          <Link href="/internships/type/research" passHref>
            <div className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Graphics Design</div>
          </Link>  
        </div>
</div>
</div>
        

</div>
    
    </>
  )
}

export default Internships
