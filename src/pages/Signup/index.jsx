import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../utils/axios";
import { Link } from "react-router-dom";

import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";

import "./Signup.css";

export default function Signup() {
  // const navigate = useNavigate();
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleChangeForm = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // // const [showPassword, setShowPassword] = useState(false);
  // const handleLogin = async () => {
  //   try {
  //     const result = await axios.post("auth/login", form);
  //     localStorage.setItem("idUser", result.data.data.id);
  //     localStorage.setItem("token", result.data.data.token);
  //     // localStorage.setItem("refreshToken", result.data.data.refreshToken);
  //     alert(result.data.msg);
  //     navigate("/signup");
  //   } catch (error) {
  //     console.error(error.response);
  //   }
  // };
  return (
    <main>
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
              className="form-input-signup"
              placeholder="Fullname"
              // onChange={handleChangeForm}
            />
            <input
              type="text"
              className="form-input-signup"
              placeholder="Email"
              // onChange={handleChangeForm}
            />
            <input
              // type={showPassword? "text" : "password"}
              type="password"
              className="form-input-signup"
              placeholder="Password"
              // onChange={handleChangeForm}
            />
            <input
              // type={showPassword? "text" : "password"}
              type="password"
              className="form-input-signup"
              placeholder="Confirm Password"
              // onChange={handleChangeForm}
            />
            <input type="checkbox" checked="checked" className="checkbox" />
            Accept terms and condition
            <button className="button-signup">Sign Up</button>
          </form>
        </div>
      </section>
    </main>
  );
}
