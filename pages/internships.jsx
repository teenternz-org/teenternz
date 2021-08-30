import VJS_NavBar from '../components/vanilla-js/vjs-navbar'
import Link from 'next/link'

const Internships = () => {
  return (
    <>
    <VJS_NavBar />
    <div className="main-2">
      <h1>
          WHAT TEAM DO YOU WANT TO WORK UPON?
      </h1>
      <p>Click on any team and find organizations providing internships and
          <br /> Volunteer opportunities in that particular field.
      </p>

      <div className="teams">
      <Link href="/internships/type/content-writing">
          <div
          className="team-cards content-writing-temp"></div>
      </Link>

      <Link href="/internships/type/graphics-design">
      <div className="team-cards graphicdesign-temp"></div>
      </Link>

      <Link href="/internships/type/film-making">
          <div className="team-cards film-making-temp"></div>
      </Link>

      <Link href="/internships/type/web-dev">
          <div className="team-cards webdev-temp"></div>
      </Link>

      <Link href="/internships/type/research">
          <div className="team-cards research-temp"></div> 
      </Link>
      
      <Link href="/internships/type/all">
          <div className="team-cards volu-temp"></div> 
      </Link>

      </div>
    </div>
    </>
  )
}

export default Internships
