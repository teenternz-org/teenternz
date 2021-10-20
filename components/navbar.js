import { useState } from "react"
import { useTheme } from 'next-themes'
import Link from "next/link"
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {

  const { theme, setTheme } = useTheme('light')
  const [active, setActive] = useState(false)
  const [navbarBlur, setNavbarBlur] = useState(false)

  const handleClick = () => {
    setActive(true)
  }

  const handleClose = () => {
    setActive(false)
  }

  const changeNavbarBlur = () => {
    if (window.scrollY > 1) {
      setNavbarBlur(true)
    }
    else {
      setNavbarBlur(false)
    }
  }
  
  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeNavbarBlur)
  }
  

  return (
    <div className="relative">
    <div className={ navbarBlur ? 'mt-0 flex backdrop-blur-lg dark:backdrop-brightness-50 backdrop-brightness-90 w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4' : 'mt-0 flex w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4'}>
        <Link href="/" passHref><div onClick={ active ? handleClose : active } className={ navbarBlur ? 'font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer' : 'font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer'}>Teenternz</div></Link>
        <div className="hidden md:flex ml-10 space-x-4">
        </div>

        <div className="space-x-8 hidden flex-1 sm:flex justify-end">
        <Link href="/internships" passHref><div className="text-base hover:scale-110 transition-transform  font-normal hover:font-semibold cursor-pointer">Internships</div></Link>
          <Link href="/events" passHref><div className="text-base hover:scale-110 transition-transform font-normal hover:font-semibold cursor-pointer">Events</div></Link>
          <Link href="/blog" passHref><div className="text-base  font-normal hover:scale-110 transition-transform hover:font-semibold cursor-pointer">Blog</div></Link>
          <Link href="/services" passHref><div className="text-base  hover:font-semibold font-normal hover:scale-110 transition-transform cursor-pointer">Services</div></Link>
        </div>
        <div className="sm:hidden cursor-pointer menu-icon" onClick={ active ? handleClose : handleClick}>
          { 
          !active &&
          <div>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
</svg>
          </div>
           }
</div>
        
        <div className="mx-auto">
        <Link href="/" passHref><div onClick={ active ? handleClose : active } className={ navbarBlur ? 'font-bold text-3xl -my-2 hover:scale-110 sm:hidden transition-transform cursor-pointer' : 'font-bold text-3xl -my-2 hover:scale-110 transition-transform sm:hidden cursor-pointer'}>Teenternz</div></Link>
        </div>
        <div className="sm:mr-0 sm:ml-4 md:ml-6" onClick={ active ? handleClose : null }>
        { theme == 'light' && <button onClick={() => setTheme('dark')}>   
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button> }
    { theme == 'dark' && <button className="hidden dark:block" onClick={() => setTheme('light')}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
      </svg>
    </button> }
        </div>
       
        </div>
        
        { active ? 
      <div className="inset-0 navback h-screen backdrop-blur-md backdrop-brightness-50 fixed" onClick={handleClose}>
            <div className="dark:bg-gray-900 bg-gray-300 h-screen fixed p-10 w-max">
          <OutsideClickHandler onOutsideClick={() => {handleClose}}>
            <div className="text-base p-2 text-center dark:text-white font-normal cursor-pointer"><Link href="/internships"><a onClick={handleClick}>Internships</a></Link></div>
            <div className="text-base p-2 font-normal dark:text-white text-center cursor-pointer"><Link href="/events"><a onClick={handleClick}>Events</a></Link></div>
            <div className="text-base p-2 text-center dark:text-white font-normal cursor-pointer"><Link href="/blog"><a    onClick={handleClick}>Blog</a></Link></div>
            <div className="text-base p-2 text-center dark:text-white font-normal cursor-pointer"><Link href="/services"><a onClick={handleClick}>Services</a></Link></div>
            {/* Height Screen */}
            <div className="h-screen"></div>
          </OutsideClickHandler>
        </div>

      </div>
         : handleClose }
    </div>
  )
}

export default Navbar
