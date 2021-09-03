const Events = () => {
  return (
    <>
    <div className="events">
        <h1>Events</h1>
        <p>Register for  our free events and learn from professionals and young Leaders </p>
    </div><br /><br /><br /><br />

    <div className="event-cards">
        <div className="event-card" id="event-card-1">
            <div className="cover">
                <img src="/img/event-1.png" alt="Cover"/>
            </div>

            <div className="date-time">
                <p>Date - 03 September 2021</p>
                <p>Time - 7 pm IST</p>
                <button className="btn-2"><a href="https://forms.gle/EF94yVo9zmS42rh29">Register</a></button>
            </div>
        </div>
    </div><br /><br /><br />
    </>
  )
}

export default Events
