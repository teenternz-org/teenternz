import Link from 'next/link'

const VJS_NavBar = () => {
  return (
    <>
    <div className="nav">
        <nav>
          <div className="logo"><Link href="/"><a>Teenternz</a></Link>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="fas fa-bars"></i>
          </label>
          <ul>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/internships"><a>Internships</a></Link></li>
            <li><Link href="/events"><a>Events</a></Link></li>
            <li><Link href="/articles"><a>Articles</a></Link></li>
          </ul>
        </nav>
    </div>
    </>
  )
}

export default VJS_NavBar
