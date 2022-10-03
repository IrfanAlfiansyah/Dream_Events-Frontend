import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/fb..png";

import "./Signin.css";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("userId", result.data.data.id);
      localStorage.setItem("token", result.data.data.token);
      // localStorage.setItem("refreshToken", result.data.data.refreshToken);
      alert(result.data.msg);
      navigate("/signup");
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <main>
      <aside className="row side-content-signin justify-content-center align-items-center">
        <img className="side-img-signin " src={icon} alt="icon" />
      </aside>
      <section className="main-header-signin">
        <header className="header-signin">
          <img className="header-logo-signin" src={logo} alt="logo" />
        </header>
        <div className="title-signin">
          <h1 className="title-text-signin">Sign In</h1>
          <div className="welcome-signin">
            <p className="welcome-text-signin">
              Hi, Welcome back to Urticket!{" "}
            </p>
          </div>
        </div>
        <div className="form-signin">
          <form className="form-container-signin">
            <input
              type="text"
              className="form-input-signin"
              placeholder="Username"
              onChange={handleChangeForm}
            />
            <input
              type="text"
              className="form-input-signin"
              placeholder="Email"
              onChange={handleChangeForm}
            />
            <input
              // type={showPassword? "text" : "password"}
              type="password"
              className="form-input-signin"
              placeholder="Password"
              onChange={handleChangeForm}
            />
            <Link to="/forgotpassword">
              <button className="forgot-pw-signin">Forgot Password?</button>
            </Link>
            <button className="button-signin" onClick={handleLogin}>
              Sign In
            </button>
            <p className="alternative-signin">or sign in with</p>
            <div className="row alternative-signin-icon">
              <button className="alternative-signin-button">
                <img
                  className="alternative-signin-img"
                  src={google}
                  alt="google"
                />
              </button>
              <button className="alternative-signin-button">
                <img
                  className="alternative-signin-img"
                  src={facebook}
                  alt="facebook"
                />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
