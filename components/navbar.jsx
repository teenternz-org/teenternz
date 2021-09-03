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
      <nav className="flex flex-1 md:hidden sticky top-0">
        <div className="text-white text-2xl cursor-pointer"><Link href="/"><a onClick={this.state.active ? this.handleClick : this.state.inactive}>Teenternz</a></Link></div>
        <div className="text-white p-2 cursor-pointer menu-icon" onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg></div> 
        <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
        <div className="text-black text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/internships"><a onClick={this.handleClick}>Internships</a></Link></div>
        <div className="text-black mt-0 text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/events"><a onClick={this.handleClick}>Events</a></Link></div>
        <div className="text-black text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/articles"><a onClick={this.handleClick}>Articles</a></Link></div>
        <div className="text-black text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/about"><a onClick={this.handleClick}>About</a></Link></div>
        </ul>
       
      </nav>
      <div className="hidden md:block sticky top-0">
        <nav>
          <div className="text-white text-3xl"><Link href="/"><a>Teenternz</a></Link>
          </div>
          <div className="flex flex-1 md:ml-6 md:space-x-6">
            
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/internships"><a>Internships</a></Link></div>
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/events"><a>Events</a></Link></div>
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/articles"><a>Articles</a></Link></div>
          </div>
          <div className="justify-end flex space-x-4">
            <div className="bg-purple-200 p-3 rounded-md cursor-pointer">
              <a href="#">Sign Up</a> 

            </div>
            <div className="bg-purple-200 p-3 rounded-md cursor-pointer">
            <a href="#">Log In</a>
            </div>
          </div>
        </nav>
    </div>
      </>
    );
  }
}

export default Navbar;
