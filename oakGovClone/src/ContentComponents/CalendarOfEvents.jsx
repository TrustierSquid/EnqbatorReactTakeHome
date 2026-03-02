

export default function CalendarOfEvents(){
  return (
    <section id="calendarOfEventsContainer">
      <h4>CALENDAR OF EVENTS</h4>
      <h1>What's Happening</h1>
      <br />

      <div id="eventsFlexContainer">

        <span className="eventItem">
          <img src="/src/assets/imgs/event1.png" alt="" />

          <div className="eventDetails">
            <span className="eventDate">
              <h4>FEB</h4>
              <h1>28</h1>
            </span>
            <span className="eventDesc">
              <h3>Snowshoes & Cinema</h3>
              <p>2:00 PM - 5:00 PM</p>
            </span>
          </div>
        </span>


        <span className="eventItem">
          <img src="/src/assets/imgs/event2.png" alt="" />

          <div className="eventDetails">
            <span className="eventDate">
              <h4>MAR</h4>
              <h1>03</h1>
            </span>
            <span className="eventDesc">
              <h3>Oakland County Michigan WORKS! Race to Talent Event</h3>
              <p>2:00 PM - 3:30 PM</p>
            </span>
          </div>
        </span>


        <span className="eventItem">
          <img src="/src/assets/imgs/event3.png" alt="" />

          <div className="eventDetails">
            <span className="eventDate">
              <h4>Mar</h4>
              <h1>04</h1>
            </span>
            <span className="eventDesc">
              <h3>Gleaners Food Distribution</h3>
              <p>9:00 AM - 10:00 PM</p>
            </span>
          </div>
        </span>


      </div>
    </section>
  )
}