import React, { Component } from "react";
import Link from 'next/link'

class Navbar extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return (
      <>
      <div className="mt-0 shadow flex bg-white sticky top-0 flex-1 md:px-12 px-6 py-4 md:py-4">
        <Link href="/" passHref><div className="font-bold text-3xl cursor-pointer">Teenternz</div></Link>
        <div className="hidden md:flex ml-10 space-x-4">
        <Link href="/internships" passHref><div className="text-base p-2 font-normal cursor-pointer">Internships</div></Link>
          <Link href="/events" passHref><div className="text-base p-2 font-normal cursor-pointer">Events</div></Link>
          <Link href="/blog" passHref><div className="text-base p-2 font-normal cursor-pointer">Blog</div></Link>
        </div>

        <div className="md:space-x-8 space-x-4 hidden flex-1 md:flex justify-end">
        <Link href="#" passHref><div className="text-base font-normal p-2 cursor-pointer">Log In</div></Link>
        <Link href="#" passHref><div className="text-base py-2 px-4 shadow-md cursor-pointer rounded-lg font-normal bg-blue-500 text-white">Join</div></Link>
        </div>
        <div className="text-black py-1 mx-2 md:hidden cursor-pointer menu-icon" onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="md:hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
<div>
<div>
  
</div>
<div className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
        <div className="text-base p-3 w-full text-center font-normal cursor-pointer"><Link href="/internships"><a onClick={this.handleClick}>Internships</a></Link></div>
        <div className="text-base p-3 w-full font-normal text-center cursor-pointer"><Link href="/events"><a onClick={this.handleClick}>Events</a></Link></div>
        <div className="text-base p-3 w-full text-center font-normal cursor-pointer"><Link href="/blog"><a onClick={this.handleClick}>Blog</a></Link></div>
        <div className="text-base p-3 mb-4 w-full text-center font-normal cursor-pointer"><Link href="#"><a onClick={this.handleClick}>Log In</a></Link></div>
        <div className="text-base mx-auto p-4 py-2 text-center shadow-md font-normal cursor-pointer rounded-lg bg-blue-500 text-white mb-96"><Link href="#"><a onClick={this.handleClick}>Join</a></Link></div>
        </div>
</div>
      </div>
      </>
    );
  }
}

export default Navbar;
