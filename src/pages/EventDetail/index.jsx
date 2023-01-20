import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Event.css";

import map_pin from "../../assets/img/map-pin.png";
import clock from "../../assets/img/clock.png";
import attendees from "../../assets/img/attendees.png";
import map from "../../assets/img/map.png";
import axios from "../../utils/axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataEventById } from "../../stores/actions/event";
import { createDataWishlist } from "../../stores/actions/wishlist";

export default function Event() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
  const [addWishlist, setAddWishlist] = useState(false);
  const [form, setForm] = useState({
    eventId: eventId,
    userId: userId,
  });
  console.log(setForm);
  console.log(setAddWishlist);

  const getDataEvent = async () => {
    try {
      const result = await dispatch(getDataEventById(eventId));
      setData(result.action.payload.data.data[0]);
      setImage(result.action.payload.data.data[0].image);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyTicket = () => {
    navigate("/order", {
      state: {
        eventId: eventId,
      },
    });
  };

  const handleAddWishlist = async () => {
    try {
      const result = await dispatch(createDataWishlist(form));
      alert(result.data.message);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getDataEvent();
    cekWishlist();
  }, [image]);

  const cekWishlist = async () => {
    const cek = await axios.get(`wishlist/${userId}`);
    const searchWishlist = cek.data.data.filter(
      (item) => eventId == item.eventId
    );
    console.log(searchWishlist);
    if (searchWishlist.length > 0) {
      setAddWishlist(true);
    } else {
      setAddWishlist(false);
    }
  };

  return (
    <>
      <Header />
      <main className="primary">
        <div className="main-content">
          <div className="side-order">
            {image && (
              <img
                id="event"
                src={`https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${image}`}
                alt="image"
                className="img-event"
              />
            )}
            <div className="add-wishlist" onClick={handleAddWishlist}>
              {addWishlist ? (
                <>
                  {" "}
                  <i className="bi bi-heart-fill"></i>
                </>
              ) : (
                <>
                  <i className="bi bi-heart"></i>
                </>
              )}{" "}
              Add to Wishlist
            </div>
          </div>
          <div className="event-class">
            <div className="head-event-class">
              <p className="event-text">{data.name}</p>
            </div>
            <div className="event-card">
              <div className="section-img">
                <img className="map" src={map_pin} alt="map-pin" />
              </div>
              <div className="event-description">
                <p className="section">{data.location}</p>
              </div>
              <div className="section-img">
                <img className="map" src={clock} alt="clock" />
              </div>
              <div className="event-description">
                <p className="section">{data.dateTimeShow}</p>
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
                <p className="detail-event-value-text">{data.detail}</p>
                <p className="detail-event-value-more">Read More</p>
                <p className="detail-event-info-text">Location</p>
                <img className="map-location" src={map} alt="map" />
              </div>
            </div>
            <button className="button-checkout" onClick={handleBuyTicket}>
              Buy Ticket
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
