import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
// import Profile from "./pages/Profile";
import Order from "./pages/Order";
import ForgotPassword from "./pages/ForgotPassword";
import EventDetail from "./pages/EventDetail";
import UpdatePassword from "./pages/UpdatePassword";
// import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/eventdetail" element={<EventDetail />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route
          path="*"
          element={
            <main className="d-flex justify-content-center align-item-center p-5 fw-bold">
              <p>404. Page Not Found!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
