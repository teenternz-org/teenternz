import VJS_NavBar from './vjs-navbar'
import Link from 'next/link'
import VJS_Articles_Recent_6 from './vjs-articles-recent-6'

const Vanilla_JS_Home = () => {
  return (
    <>
    <div className="home">

      <VJS_NavBar />

      {/* Hero */}

      <h1>Welcome to Teenternz</h1>
      <p>Path to unlimited opportunities</p>
      <span>
        <button className="btn"> <a href="#explore">Explore</a></button>
        <button className="btn" style={{width: 200}}> <a href="https://discord.gg/aDBZ74NDYu" rel="noreferrer" target="_blank">Join our  Discord</a></button>
      </span>
    </div><br /><br /><br /><br /><br /><br /><br />

    {/* Articles */}
    
    <div className="article-head">
      <h1 className="h1-temp">Latest Articles</h1>
    </div>
    <VJS_Articles_Recent_6 /><br /><br /><br /><br />
    <div className="text-center">

    <button className="p-3 bg-purple-600 text-white font-medium mb-6 rounded-md"><Link href="/articles"><a>Read more</a></Link></button>
    </div>
      {/* Explore */}

    <div className="ex" id="explore">
      <h1>What we Offer?</h1>
    </div><br /><br /><br /> <br /><br /><br />

    <div className="cards">
      <div className="card" id="card-1">
        <div className="cover">
          <img src="/img/internships.png" alt="Cover"/>
        </div>
        <div className="date-time">
          <p>Internships</p>
          <button className="btn-2"><a href="internships.html">Explore</a></button>
        </div>
      </div>

      <div className="card" id="card-1">
        <div className="cover">
          <img src="/img/events.png" alt="Cover"/>
        </div>

        <div className="date-time">
          <p>Events</p>
          <button className="btn-2"><a href="events.html">Explore</a></button>
        </div>
      </div>

      <div className="card" id="card-1">
        <div className="cover">
          <img src="/img/article.png" alt="Cover"/>
        </div>
        <div className="date-time">
          <p>Articles</p>
          <button className="btn-2"><a href="article.html">Explore</a></button>
        </div>
      </div>
    </div><br /><br /><br />
  </>
  )
}

export default Vanilla_JS_Home;