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
      <div className="mt-0 md:flex bg-white sticky top-0 sm:flex hidden flex-1 md:px-12 sm:px-6 sm:py-4 md:py-4">
        <div><Link href="/" passHref><div className="font-bold text-3xl cursor-pointer">Teenternz</div></Link>
        </div>
        <div className="md:space-x-8 space-x-4 flex-1 flex justify-end">
        <Link href="#" passHref><div className="text-lg font-medium p-2 cursor-pointer">Log In</div></Link>
        <Link href="#" passHref><div className="text-lg py-2 px-4 shadow-md cursor-pointer rounded-lg font-medium bg-blue-500 text-white">Join</div></Link>
        </div>
      </div>
      <div className="-mt-20 p-7 hidden sticky top-0 justify-center md:space-x-8 sm:space-x-4 sm:flex sm:flex-1">
          <Link href="/internships" passHref><div className="text-lg font-medium cursor-pointer">Internships</div></Link>
          <Link href="/events" passHref><div className="text-lg font-medium cursor-pointer">Events</div></Link>
          <Link href="/articles" passHref><div className="text-lg font-medium cursor-pointer">Articles</div></Link>
        </div>
      <div className="flex flex-1 justify-between sm:hidden p-6">
      <div className="text-black text-2xl font-medium cursor-pointer"><Link href="/"><a onClick={this.state.active ? this.handleClick : this.state.inactive}>Teenternz</a></Link></div>
        <div className="text-black p-2 cursor-pointer menu-icon" onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
        <div className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
        <div className="text-lg p-3 w-full text-center cursor-pointer"><Link href="/internships"><a onClick={this.handleClick}>Internships</a></Link></div>
        <div className="text-lg p-3 w-full text-center cursor-pointer"><Link href="/events"><a onClick={this.handleClick}>Events</a></Link></div>
        <div className="text-lg p-3 w-full text-center cursor-pointer"><Link href="/articles"><a onClick={this.handleClick}>Articles</a></Link></div>
        <div className="text-lg p-3 mb-4 w-full text-center cursor-pointer"><Link href="#"><a onClick={this.handleClick}>Log In</a></Link></div>
        <div className="text-lg mx-auto p-4 py-2 text-center shadow-md cursor-pointer rounded-lg font-medium bg-blue-500 text-white"><Link href="#"><a onClick={this.handleClick}>Join</a></Link></div>
        </div>
      </div>
      </>
    );
  }
}

export default Navbar;
