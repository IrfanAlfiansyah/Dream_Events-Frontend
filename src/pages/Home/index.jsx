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
import partner from "../../assets/img/partner.png";

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
            <div className="row justify-content-center" style={{ margin: 0 }}>
              <div className="line-event">--- E V E N T</div>
            </div>
            <h1 className="event-for-you">Events For You</h1>
            {/* <Date /> */}
            {/* <Card /> */}
            <div className="row justify-content-center" style={{ margin: 0 }}>
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
                <img className="picture" src={Jakarta} alt="jakarta" />
                <div className="place">Jakarta</div>
              </div>
              <div className="location">
                <img className="picture" src={Bandung} alt="Bandung" />
                <div className="place">Bandung</div>
              </div>
              <div className="location">
                <img className="picture" src={Bali} alt="Bali" />
                <div className="place">Bali</div>
              </div>
            </div>
            <div className="location-img-1">
              <div className="location">
                <img className="picture" src={Aceh} alt="Aceh" />
                <div className="place">Aceh</div>
              </div>
              <div className="location">
                <img className="picture" src={Solo} alt="Solo" />
                <div className="place">Solo</div>
              </div>
              <div className="location">
                <img className="picture" src={Yogyakarta} alt="Yogyakarta" />
                <div className="place">Yogyakarta</div>
              </div>
              <div className="location">
                <img className="picture" src={Semarang} alt="Semarang" />
                <div className="place">Semarang</div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" style={{ margin: 0 }}>
            <button className="see-all">See All</button>
          </div>
        </main>
        <main className="row category-box">
          <div className="box-3">
            <div className="row justify-content-center" style={{ margin: 0 }}>
              <div className="line-event">--- C A T E G O R Y</div>
            </div>
            <h1 className="category-for-you">Browse Events By Category</h1>
          </div>
        </main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="row collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav justify-content-center gap-5 ">
                <a className="nav-item nav-link" href="#">
                  Music
                </a>
                <a className="nav-item nav-link" href="#">
                  Arts
                </a>
                <a className="nav-item nav-link" href="#">
                  Outdoors
                </a>
                <a className="nav-item nav-link " href="#">
                  Workshop
                </a>
                <a className="nav-item nav-link" href="#">
                  Sports
                </a>
                <a className="nav-item nav-link" href="#">
                  Festival
                </a>
                <a className="nav-item nav-link" href="#">
                  Fashion
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="row partner">
          <img className="partner" src={partner} alt="partner" />
        </div>
        <Footer />
      </div>
    </>
  );
}
