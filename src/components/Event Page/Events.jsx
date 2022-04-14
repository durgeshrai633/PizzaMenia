import React from "react";
import "./event.css";
const events = [
  {
    eventName: "Great Pizza Show",
    eventTime: "10:00 AM, 12 Apr, 2022",
    eventDesc: "This show is all about the pizza histories",
    eventVenue: "New Ashok Nagar, New Delhi, 110096",
  },
  {
    eventName: "The Pizza History",
    eventTime: "11:00 PM, 16 Apr, 2022",
    eventDesc: "The history of pizza, how pizza got his place",
    eventVenue: "New Ashok Nagar, New Delhi, 110096",
  },
  {
    eventName: "The Sharma Shefs",
    eventTime: "9:00 AM, 22 Apr, 2022",
    eventDesc: "Mr. Amit Sharma and family will share her expreience...",
    eventVenue: "New Ashok Nagar, New Delhi, 110096",
  },
];
function Events() {
  return (
    <section>
      <h1 className='heading'>Events</h1>
      <h2 className='accent'>Upcoming Events</h2>
      <div className='event-cards'>
        {events.map((event) => {
          return (
            <div className='event-card'>
              <h2 className="primary">{event.eventName}</h2>
              <p className="accent">{event.eventDesc}</p>
              <span className='accent cal-span'>
                <i className='accent fa-solid fa-calendar-days'></i>
                <span className="accent">{event.eventTime}</span>
              </span>
              <span className='accent cal-span'>
                <i className='fa-solid fa-location-dot'></i>
                <span>{event.eventVenue}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Events;
