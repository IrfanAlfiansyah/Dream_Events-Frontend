import React from "react";

import "./profile.css";

export default function CardProfile() {
  return (
    <main className="container-profile">
      <div className="card-profile">Profile</div>
      <div className="form-input">
        <form className="form-container-edit-profile">
          <div className="box-profile">
            <label className="form-name">Name</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Name"
            />
          </div>
          <div className="box-profile">
            <label className="form-name">Username</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Username"
            />
          </div>
          <div className="box-profile">
            <label className="form-name">Email</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Email"
            />
          </div>
          <div className="box-profile">
            <label className="form-name">Gender</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Gender"
            />
          </div>
          <div className="box-profile">
            <label className="form-name">Profession</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Profession"
            />
          </div>
          <div className="box-profile">
            <label className="form-name">Nationality</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Nationality"
            />
          </div>
          <div className="box-profile">
            <label className="form-name">Birthday Date</label>
            <input
              type="text"
              className="form-edit-profile"
              placeholder="Input Birthday Date"
            />
          </div>
        </form>
        <div className="box-profile-img">
          <input type="file" className="form-edit-profile" />
        </div>
      </div>
      <button className="button-save">Save</button>
    </main>
  );
}
