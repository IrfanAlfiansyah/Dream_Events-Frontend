import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { Icon } from "@iconify/react";
// import Footer from "../../components/Footer";
import { getDataUser } from "../../stores/actions/user";

import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/fb..png";

import "./Login.css";
import { useDispatch } from "react-redux";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const isAllFormFilled = Object.keys(form).every((e) => form[e]);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const result = await axios.post("auth/login", form);
      dispatch(getDataUser(result.data.data.userId));
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshToken", result.data.data.refreshToken);
      alert(result.data.message);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.message);
    }
  };
  const hanldeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="main">
        <main className="signin">
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
                  type="email"
                  name="email"
                  className="form-input-signin"
                  placeholder="Email"
                  onChange={handleChangeForm}
                />
                {""}
                <div className="position-relative input-icon">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-input-signin"
                    placeholder="Password"
                    onChange={handleChangeForm}
                  />
                  <i className="icon-eye-password" onClick={hanldeShowPassword}>
                    {showPassword ? (
                      <Icon icon="el:eye-close" width="65%" />
                    ) : (
                      <Icon icon="el:eye-open" width="65%" />
                    )}
                  </i>
                </div>

                <Link to="/forgotpassword">
                  <button className="forgot-pw-signin">Forgot Password?</button>
                </Link>
                {!isLoading ? (
                  <button
                    className="button-signin"
                    disabled={!isAllFormFilled}
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                ) : (
                  <button className="button-signin">
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden" />
                    </div>
                  </button>
                )}
                <div className="signup-button">
                  <p>Don`t have any acount? Sign up</p>
                  <Link to="/signup">
                    <button className="forgot-pw-signin">Here</button>
                  </Link>
                </div>
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
      </div>
      {/* <Footer /> */}
    </>
  );
}
