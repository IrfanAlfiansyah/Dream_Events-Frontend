import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { Icon } from "@iconify/react";

import Footer from "../../components/Footer";

import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";

export default function UpdatePassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handlelogin = async () => {
    try {
      const result = await axios.post("user/updatePassword/:userId", form);
      localStorage.setItem("userId", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshToken", result.data.data.refreshToken);
      alert(result.data.message);
      navigate("/signin");
    } catch (error) {
      console.error(error.response);
    }
  };
  const hanldeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <main className="signin">
        <aside className="row side-content-signin justify-content-center align-items-center">
          <img className="side-img-signin " src={icon} alt="icon" />
        </aside>
        <section className="main-header-signin">
          <header className="header-signin">
            <img className="header-logo-signin" src={logo} alt="logo" />
          </header>
          <div className="title-signin">
            <h1 className="title-text-signin">Update Password</h1>
            <div className="welcome-signin">
              <p className="welcome-text-signin">
                Hi, Welcome back to Urticket!{" "}
              </p>
            </div>
          </div>
          <div className="form-signin">
            <form className="form-container-signin">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-input-signin"
                placeholder="Old Password"
                onChange={handleChangeForm}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-input-signin"
                placeholder="New Password"
                onChange={handleChangeForm}
              />
              <div className="position-relative input-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-input-signin"
                  placeholder="Confirm Password"
                  onChange={handleChangeForm}
                />
                <i className="icon-eye-password" onClick={hanldeShowPassword}>
                  {showPassword ? (
                    <Icon icon="el:eye-open" width="75%" />
                  ) : (
                    <Icon icon="el:eye-close" width="75%" />
                  )}
                </i>
              </div>
              <button
                type="button"
                className="button-signin"
                onClick={handlelogin}
              >
                Update
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
