import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./Events.css";

function Events({ setSiteTitle }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setSiteTitle("Événements");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => {
        alert(
          "Une erreur est survenue lors de la récupération de votre actualité"
        );
      });
  }, []);

  return (
    <div className="container-global-events">
      {events?.map((events) => (
        <div className="wrapper-events">
          <div className="page-events">
            <div className="title-events">
              <h1 className="events">{events.title}</h1>
              <div className="container-events">
                <div className="wrapper-illustration-events">
                  <img src={events.src} alt={events.src} />
                  <img
                    className="illustration-events"
                    src={events.link}
                    alt={events.link}
                  />
                </div>
                <div className="location-events">{events.location}</div>
                <div className="datetime-created-events">
                  Événement datant du :{" "}
                  {moment(events.created_at).format("DD/MM/YYYY à HH:mm")}{" "}
                </div>
                <div className="datetime-dated-events">
                  Événement ayant lieu le :{" "}
                  {moment(events.event_date).format("DD/MM/YYYY à HH:mm")}{" "}
                </div>
                <p>{events.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
