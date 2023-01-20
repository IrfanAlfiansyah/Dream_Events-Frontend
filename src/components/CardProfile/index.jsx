import React from "react";

import "./profile.css";

export default function CardProfile(props) {
  const data = props;
  console.log(data);

  return (
    <>
      <div className="right-profile">
        <h1 className="title-profile">Profile</h1>
        <div className="form">
          <form className="form-input-profile">
            <div className="form-input">
              <label className="label-profile">Name</label>
              <input
                className="label-profile"
                type="text"
                // placeholder="Input Name..."
                name="name"
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Username</label>
              <input
                className="label-profile"
                type="text"
                placeholder="Input Username..."
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Email</label>
              <input
                className="label-profile"
                type="text"
                placeholder="Input Email..."
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Phone Number</label>
              <input
                className="label-profile"
                type="number"
                placeholder="Input Phone Number..."
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Gender</label>
              <input
                className="label-profile"
                type="text"
                placeholder="Input Name..."
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Profession</label>
              <input
                className="label-profile"
                type="text"
                placeholder="Input Profession..."
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Nationality</label>
              <input
                className="label-profile"
                type="text"
                placeholder="Input Nationality..."
              />
            </div>
            <div className="form-input">
              <label className="label-profile">Birthday Date</label>
              <input className="label-profile" type="date" />
            </div>
          </form>
          <div className="photo-box">
            <input type="file" name="image" />
            <p>Image size max 2 MB</p>
            <p>Image format: JPG, JPEG, PNG</p>
          </div>
        </div>
        <button className="button-save">Save</button>
      </div>
    </>
  );
}
