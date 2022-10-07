import React from "react";
import logo from "../../assets/img/logo.png";
import facebook from "../../assets/img/fb.png";
import whatsapp from "../../assets/img/wa.png";
import instagram from "../../assets/img/ig.png";
import twitter from "../../assets/img/tw.png";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="info">
        <div className="col">
          <section className="head">
            <img className="logo-img2" src={logo} alt="logo" />
            <p className="info-text">Find events you love with our</p>
          </section>
          <section className="sosmed">
            <div className="sosmed-img">
              <img className="sosmed-icon" src={facebook} alt="fb" />
            </div>
            <div className="sosmed-img">
              <img className="sosmed-icon" src={whatsapp} alt="wa" />
            </div>
            <div className="sosmed-img">
              <img className="sosmed-icon" src={instagram} alt="ig" />
            </div>
            <div className="sosmed-img">
              <img className="sosmed-icon" src={twitter} alt="tw" />
            </div>
          </section>
        </div>
        <div className="col">
          <section className="body">
            <p className="right-text-head">Wetick</p>
            <p className="right-text">About us</p>
            <p className="right-text">Features</p>
            <p className="right-text">Blog</p>
            <p className="right-text">Payment</p>
            <p className="right-text">Mobile App</p>
          </section>
        </div>
        <div className="col">
          <section className="body">
            <p className="right-text-head">Features</p>
            <p className="right-text">Booking</p>
            <p className="right-text">Create Event</p>
            <p className="right-text">Discover</p>
            <p className="right-text">Register</p>
          </section>
        </div>
        <div className="col">
          <section className="body">
            <p className="right-text-head">Company</p>
            <p className="right-text">Partnership</p>
            <p className="right-text">Help</p>
            <p className="right-text">Terms of Services</p>
            <p className="right-text">Privacy Policy</p>
            <p className="right-text">Sitemap</p>
          </section>
        </div>
      </footer>
      <div className="bottom-footer">
        <p className="bottom-footer-text">@2022 Wetick Alrights Reserved</p>
      </div>
    </>
  );
}
