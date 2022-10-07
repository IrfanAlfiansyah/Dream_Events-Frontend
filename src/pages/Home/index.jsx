import React from "react";
import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Date from "../../components/Date";

import search from "../../assets/img/search.png";
import location from "../../assets/img/location.png";
import arrow from "../../assets/img/arrow.png";
import Jakarta from "../../assets/img/jakarta.png";
import Bandung from "../../assets/img/bandung.png";
import Bali from "../../assets/img/bali.png";
import Aceh from "../../assets/img/aceh.png";
import Solo from "../../assets/img/solo.png";
import Yogyakarta from "../../assets/img/yogyakarta.png";
import Semarang from "../../assets/img/semarang.png";
// import partner from "../../assets/img/partner.png";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <main className="box-1">
          <div className="home-banner">
            <div className="search-section">
              <h1 className="banner-text">Find events you love with our</h1>
              <div className="search">
                <img className="search-icon" src={search} alt="search-icon" />
                <p className="search-text">Search Event</p>
                <img className="search-icon" src={location} alt="location" />
                <p className="search-text">Where?</p>
                <button className="search-button">
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </main>
        <main className="row event-box">
          <div className="box-2">
            <div className="row justify-content-center">
              <div className="line-event">--- E V E N T</div>
            </div>
            <h1 className="event-for-you">Events For You</h1>
            {/* <Date /> */}
            {/* <Card /> */}
            <div className="row justify-content-center">
              <button className="see-all">See All</button>
            </div>
          </div>
        </main>
        <main className="location-box">
          <div className="location-line">--- L O C A T I O N</div>
          <div className="location-img">
            <div className="location-img-1">
              <p className="discover-text">Discover Events Near You</p>
              <div className="location">
                <img src={Jakarta} alt="jakarta" />
                <div className="place">Jakarta</div>
              </div>
              <div className="location">
                <img src={Bandung} alt="Bandung" />
                <div className="place">Bandung</div>
              </div>
              <div className="location">
                <img src={Bali} alt="Bali" />
                <div className="place">Bali</div>
              </div>
            </div>
            <div className="location-img-1">
              <div className="location">
                <img src={Aceh} alt="Aceh" />
                <div className="place">Aceh</div>
              </div>
              <div className="location">
                <img src={Solo} alt="Solo" />
                <div className="place">Solo</div>
              </div>
              <div className="location">
                <img src={Yogyakarta} alt="Yogyakarta" />
                <div className="place">Yogyakarta</div>
              </div>
              <div className="location">
                <img src={Semarang} alt="Semarang" />
                <div className="place">Semarang</div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
