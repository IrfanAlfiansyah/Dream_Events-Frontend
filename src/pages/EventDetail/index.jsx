import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Event.css";

import event from "../../assets/img/event.png";
import love from "../../assets/img/love.png";
import map_pin from "../../assets/img/map-pin.png";
import clock from "../../assets/img/clock.png";
import attendees from "../../assets/img/attendees.png";
import map from "../../assets/img/map.png";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Event() {
  const { eventId } = useParams();
  console.log(eventId);

  const navigate = useNavigate();

  const handleOrder = (eventId) => {
    navigate(`/order/${eventId}`);
  };
  return (
    <>
      <Header />
      <main className="primary">
        <div className="main-content">
          <div className="side-order">
            <img className="img-event" src={event} alt="event" />
            <div className="add-wishlist">
              <img className="wishlist-img" src={love} alt="wishlist" />
              <p className="wishlist-text">Add to wishlist</p>
            </div>
          </div>
          <div className="event-class">
            <div className="head-event-class">
              <p className="event-text">Sights & Sounds Exhibition</p>
            </div>
            <div className="event-card">
              <div className="section-img">
                <img className="map" src={map_pin} alt="map-pin" />
              </div>
              <div className="event-description">
                <p className="section">Jakarta, Indonesia</p>
              </div>
              <div className="section-img">
                <img className="map" src={clock} alt="clock" />
              </div>
              <div className="event-description">
                <p className="section">Wed, 15 Nov, 4:00 PM</p>
              </div>
            </div>
            <div className="attendees-card">
              <div className="attendees-description">
                <p className="attendees">Attendees</p>
              </div>
              <div className="attendees-img">
                <img
                  className="attendees-img"
                  src={attendees}
                  alt="attendees"
                />
              </div>
            </div>
            <div className="detail-event">
              <div className="detail-event-info">
                <h1 className="detail-event-info-text">Event Detail</h1>
                <p className="detail-event-value-text">
                  After his controversial art exhibition Tear and Consume back
                  in November 2018, in which guests were invited to tear up…
                </p>
                <p className="detail-event-value-more">Read More</p>
                <p className="detail-event-info-text">Location</p>
                <img className="map-location" src={map} alt="map" />
              </div>
            </div>
            <button className="button-checkout" onClick={handleOrder}>
              Buy Ticket
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
