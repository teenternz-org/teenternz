import Link from 'next/link'
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import { useTheme } from 'next-themes'

const Footer = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="bg-bgcolor-light dark:bg-bgcolor-dark">
      <div className="grid grid-cols-5">
        <div className="mx-6 md:block hidden">
          {theme === 'light' ? <img src="/img/footer-logo-light.svg" className="h-24 w-24" alt="" /> : <img src="/img/footer-logo-dark.svg" className="h-24 w-24" alt="" />
          }

        </div>
        <div className=" md:col-span-4 col-span-5 md:flex hidden flex-1 md:pt-0 my-auto md:space-x-6 justify-center md:justify-end mx-16">
          <Link href="/about" passHref><div className="text-base p-2   font-normal cursor-pointer">About Us</div></Link>
          <Link href="/career" passHref><div className="text-base p-2   font-normal cursor-pointer">Career</div></Link>
          <Link href="/faq" passHref><div className="text-base p-2   font-normal cursor-pointer">FAQ</div></Link>
          <div className="cursor-pointer my-auto">
            <a href="https://www.instagram.com/teenternz/" target="_blank" rel="noreferrer"><FaInstagram size="20" /></a>
          </div>
          <div className="cursor-pointer my-auto">
            <a href="https://discord.gg/UPuWU6GH" target="_blank" rel="noreferrer"><FaDiscord size="20" /></a>
          </div>
          <div className="cursor-pointer my-auto">
            <a href="https://twitter.com/teenternz" target="_blank" rel="noreferrer"><FaTwitter size="20" /></a>
          </div>
          <div className="cursor-pointer my-auto">
            <a href="https://www.linkedin.com/company/teenternz/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="mx-6 md:hidden block">
          {theme === 'light' ? <img src="/img/footer-logo-light.svg" className="h-24 w-24" alt="" /> : <img src="/img/footer-logo-dark.svg" className="h-24 w-24" alt="" />
          }
        </div>
        <div className="flex md:hidden ml-auto mr-12 flex-col space-y-2 my-6">
          <Link href="/about" passHref><div className="  cursor-pointer font-normal">About Us</div></Link>
          <Link href="/career" passHref><div className="  cursor-pointer font-normal">Career</div></Link>
          <Link href="/faq" passHref><div className="  cursor-pointer font-normal">FAQ</div></Link>
        </div>
      </div>
      <div className="flex md:hidden space-y-2 flex-col">
        <div className="flex space-x-3 mx-auto py-3 flex-1 md:hidden">
          <div className="cursor-pointer  ">
            <a href="https://www.instagram.com/teenternz/" target="_blank" rel="noreferrer"><FaInstagram size="20" /></a>
          </div>
          <div className="cursor-pointer  ">
            <a href="https://discord.gg/UPuWU6GH" target="_blank" rel="noreferrer"><FaDiscord size="20" /></a>
          </div>
          <div className="cursor-pointer  ">
            <a href="https://twitter.com/teenternz" target="_blank" rel="noreferrer"><FaTwitter size="20" /></a>
          </div>
          <div className="cursor-pointer  ">
            <a href="https://www.linkedin.com/company/teenternz/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
