import Link from 'next/link'
import VJS_Articles_Recent_6 from './vjs-articles-recent-6'

const Vanilla_JS_Home = () => {
  return (
    <>
      <div class="flex items-center justify-center h-screen bg-hero-pattern bg-cover">
    
    <div class="md:font-bold md:text-5xl text-white md:m-12 font-medium text-2xl m-6 sm:text-3xl">
    Platform to find remote internships and volunteer opportunities provided by NGOs and Non-profit organisations 
    </div>
    
    </div>

      {/* Explore */}

    <div className="ex" id="explore">
      <h1>What we Offer?</h1>
    </div>

    <div className="cards mb-16">
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
    </div>
  </>
  )
}

export default Vanilla_JS_Home;