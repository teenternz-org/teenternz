import React, { Component } from "react";
import Link from 'next/link'

class VJS_NavBar extends Component {
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
      <nav className="flex flex-1 md:hidden">
        <div className="text-white text-2xl cursor-pointer"><Link href="/"><a>Teenternz</a></Link></div>
        <div className="text-white p-2 cursor-pointer menu-icon" onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
        <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
        <div className="text-black mt-0 text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/events"><a>Events</a></Link></div>
        <div className="text-black text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/articles"><a>Articles</a></Link></div>
        <div className="text-black text-2xl p-3 hover:bg-purple-200 w-full cursor-pointer"><Link href="/about"><a>About</a></Link></div>
        </ul>
       
      </nav>
      <div className="hidden md:block">
        <nav>
          <div className="text-white text-3xl"><Link href="/"><a>Teenternz</a></Link>
          </div>
          <div className="flex flex-1 justify-center md:space-x-6">
            
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/internships"><a>Internships</a></Link></div>
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/events"><a>Events</a></Link></div>
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/articles"><a>Articles</a></Link></div>
            <div className="text-white md:p-3 p-2 text-lg mx-0 md:mx-6"><Link href="/about"><a>About</a></Link></div>
          </div>
          <div className="justify-end">
            <div className="bg-purple-200 p-3 rounded-md cursor-pointer">
              <Link href="#explore"><a>Explore</a>
              </Link>
              
            </div>
          </div>
        </nav>
    </div>
      </>
    );
  }
}

export default VJS_NavBar;
