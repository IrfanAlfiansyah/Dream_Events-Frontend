import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlelogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("idUser", result.data.data.id);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.msg);
      navigate("/signup");
    } catch (error) {
      console.error(error.response);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const hanldeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container text-center">
      <h1>Login Page</h1>
      <hr />
      <input
        type="email"
        placeholder="Input your email ..."
        name="email"
        onChange={handleChangeForm}
      />
      {""}
      <br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Input your password ..."
        name="password"
        onChange={handleChangeForm}
      />
      {""}
      <br />
      <button className="btn btn-secondary" onClick={hanldeShowPassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
      <br />
      <button className="btn btn-primary" onClick={handlelogin}>
        Signin
      </button>
    </div>
  );
}
