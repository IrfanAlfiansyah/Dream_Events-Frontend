import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { Icon } from "@iconify/react";
import { getDataUser } from "../../stores/actions/user";

import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";

import "./Signup.css";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async () => {
    try {
      const result = await axios.post("auth/register", form);
      dispatch(getDataUser(result.data.data.userId));
      localStorage.setItem("userId", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshToken", result.data.data.refreshToken);
      alert(result.data.message);
      navigate("/signin");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.response);
    }
  };
  const hanldeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <main className="page">
        <div className="signup">
          <aside className="row side-content-signup justify-content-center align-items-center">
            <img className="side-img-signup" src={icon} alt="icon" />
          </aside>
          <section className="main-header-signup">
            <header className="header-signup">
              <img className="header-logo-signup" src={logo} alt="logo" />
            </header>
            <div className="title-signup">
              <h1 className="title-text-signup">Sign Up</h1>
              <div className="welcome-signup">
                <p className="welcome-text-signup">Already have an account? </p>
                <Link to="/signin">
                  <button className="login-button">Log in</button>
                </Link>
              </div>
            </div>
            <div className="form-signup">
              <form className="form-container-signup">
                <input
                  type="text"
                  name="username"
                  className="form-input-signup"
                  placeholder="Username"
                  onChange={handleChangeForm}
                />
                {""}
                <br />
                <input
                  type="email"
                  name="email"
                  className="form-input-signup"
                  placeholder="Email"
                  onChange={handleChangeForm}
                />
                {""}
                <br />
                <div className="position-relative input-icon">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-input-signup"
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
                <input type="checkbox" name="text" className="checkbox" />
                Accept terms and condition
              </form>
              <button className="button-signup" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
