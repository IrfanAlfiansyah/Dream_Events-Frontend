import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";

import "./ForgotPassword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleForgotPassword = async () => {
    try {
      const result = await axios.post("auth/forgot", form);
      localStorage.setItem("idUser", result.data.data.id);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshToken", result.data.data.refreshToken);
      alert(result.data.msg);
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
      <main>
        <aside className="row side-content-forgot justify-content-center align-items-center">
          <img className="side-img-forgot " src={icon} alt="icon" />
        </aside>
        <section className="main-header-forgot">
          <header className="header-forgot">
            <img className="header-logo-forgot" src={logo} alt="logo" />
          </header>
          <div className="title-forgot">
            <h1 className="title-text-forgot">Forgot Password</h1>
            <div className="welcome-forgot">
              <p className="welcome-text-forgot">
                You will get mail soon on your email{" "}
              </p>
            </div>
          </div>
          <div className="form-forgot">
            <form className="form-container-forgot">
              <div className="position-relative input-icon">
                <input
                  type="email"
                  className="form-input-forgot"
                  placeholder="Email"
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
              <button className="button-forgot" onClick={handleForgotPassword}>
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
