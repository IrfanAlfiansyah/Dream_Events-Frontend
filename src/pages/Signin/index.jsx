import React from "react";
import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/fb..png";

import "./Signin.css";

export default function Signin() {
  return (
    <main>
      <aside className="side-content-signin align-self-center text-center">
        <img className="side-img-signin " src={icon} alt="icon" />
      </aside>
      <section className="main-header">
        <header className="header">
          <img className="header-logo" src={logo} alt="logo" />
        </header>
        <div className="title">
          <h1 className="title-text">Sign In</h1>
          <div className="welcome">
            <p className="welcome-text">Hi, Welcome back to Urticket! </p>
          </div>
        </div>
        <div className="form">
          <form className="form-container">
            <input type="text" className="form-input" placeholder="Username" />
            <input type="text" className="form-input" placeholder="Email" />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <button className="forgot-pw">Forgot Password?</button>
            <button className="button-signin">Sign In</button>
            <p className="alternative-signin">or sign in with</p>
            <div className="alternative-signin-icon">
              <button className="alternative-signin-button">
                <img src={google} alt="google" />
              </button>
              <button className="alternative-signin-button">
                <img src={facebook} alt="facebook" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
