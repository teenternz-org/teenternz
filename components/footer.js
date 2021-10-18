import Link from 'next/link'
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import React from 'react';
class Footer extends React.Component {
  render() {
  return (
    <div className="bg-gray-900">
      <div className="grid grid-cols-5">
        <div className="mx-6 md:block hidden">
          <img src="/img/footer.svg" className="h-24 w-24" alt="" />
        </div>
        <div className=" md:col-span-4 col-span-5 md:flex hidden flex-1 md:pt-0 my-auto md:space-x-6 justify-center md:justify-end mx-16">
          <Link href="/about" passHref><div className="text-base p-2 text-white font-normal cursor-pointer">About Us</div></Link>
          <Link href="/career" passHref><div className="text-base p-2 text-white font-normal cursor-pointer">Career</div></Link>
          <div className="cursor-pointer my-auto text-white">
            <a href="https://www.instagram.com/teenternz/" target="_blank" rel="noreferrer"><FaInstagram size="20" /></a>
          </div>
          <div className="cursor-pointer my-auto text-white">
            <a href="https://discord.gg/UPuWU6GH" target="_blank" rel="noreferrer"><FaDiscord size="20" /></a>
          </div>
          <div className="cursor-pointer my-auto text-white">
            <a href="https://twitter.com/teenternz" target="_blank" rel="noreferrer"><FaTwitter size="20" /></a>
          </div>  
          <div className="cursor-pointer my-auto text-white">
            <a href="https://www.linkedin.com/company/teenternz/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="mx-6 md:hidden block">
          <img src="/img/footer.svg" className="h-24 w-24" alt="" />
        </div>
        <div className="flex md:hidden ml-auto mr-12 flex-col space-y-2 my-6">
          <Link href="/about" passHref><div className="text-white cursor-pointer font-normal">About Us</div></Link>
          <Link href="/career" passHref><div className="text-white cursor-pointer font-normal">Career</div></Link>
          </div>
      </div>
      <div className="flex md:hidden space-y-2 flex-col">
          <div className="flex space-x-3 mx-auto py-3 flex-1 md:hidden">
          <div className="cursor-pointer text-white">
            <a href="https://www.instagram.com/teenternz/" target="_blank" rel="noreferrer"><FaInstagram size="20" /></a>
          </div>
          <div className="cursor-pointer text-white">
            <a href="https://discord.gg/UPuWU6GH" target="_blank" rel="noreferrer"><FaDiscord size="20" /></a>
          </div>
          <div className="cursor-pointer text-white">
            <a href="https://twitter.com/teenternz" target="_blank" rel="noreferrer"><FaTwitter size="20" /></a>
          </div>
          <div className="cursor-pointer text-white">
            <a href="https://www.linkedin.com/company/teenternz/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Footer
