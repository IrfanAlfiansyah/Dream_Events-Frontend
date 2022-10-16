import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";

import profileDefault from "../../assets/img/profile-default.svg";
import editProfile from "../../assets/img/profile-edit.svg";
import changePassword from "../../assets/img/change-pw.svg";
import booking from "../../assets/img/booking.svg";
import wishlist from "../../assets/img/wishlist.svg";
import setting from "../../assets/img/setting.svg";
import logout from "../../assets/img/logout.svg";
import photo from "../../assets/img/profile.png";

import Profile from "../../components/CardProfile";

import "./ManageProfile.css";

export default function ManageProfile() {
  return (
    <>
      <Header />
      <main className="primary-profile">
        <div className="main-content-profile">
          <div className="side-navigation">
            <img className="photo" src={photo} alt="" />
            <div className="tag">
              <p className="profile-name">Jhon Tomson</p>
              <p className="profile-profession">Entrepereneur, ID</p>
            </div>
          </div>
          <div className="side-navigation">
            <img
              className="side-img-profile"
              src={profileDefault}
              alt="profile-default"
            />
            <p className="profile-name">Profile</p>
          </div>
          <div className="edit">
            <div className="side-navigation">
              <img
                className="side-img-profile"
                src={editProfile}
                alt="edit-profile"
              />
              <p className="profile-name">Edit Profile</p>
            </div>
            <div className="side-navigation">
              <img
                className="side-img-profile"
                src={changePassword}
                alt="change-password"
              />
              <p className="profile-name">Change Password</p>
            </div>
          </div>
          <div className="side-navigation">
            <img
              className="side-img-profile"
              src={booking}
              alt="profile-default"
            />
            <p className="profile-name">My Booking</p>
          </div>
          <div className="side-navigation">
            <img
              className="side-img-profile"
              src={wishlist}
              alt="profile-default"
            />
            <p className="profile-name">My Wishlist</p>
          </div>
          <div className="side-navigation">
            <img
              className="side-img-profile"
              src={setting}
              alt="profile-default"
            />
            <p className="profile-name">Settings</p>
          </div>
          <div className="side-navigation">
            <img
              className="side-img-profile"
              src={logout}
              alt="profile-default"
            />
            <p className="profile-name">Logout</p>
          </div>
        </div>
        <Profile />
      </main>
      <Footer />
    </>
  );
}
