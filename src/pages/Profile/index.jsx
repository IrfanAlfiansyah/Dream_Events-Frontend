import React, { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import { Toast, ToastContainer } from "react-bootstrap";

import profileDefault from "../../assets/img/profile-default.svg";
import editProfile from "../../assets/img/profile-edit.svg";
import changePassword from "../../assets/img/change-pw.svg";
import booking from "../../assets/img/booking.svg";
import wishlist from "../../assets/img/wishlist.svg";
import setting from "../../assets/img/setting.svg";
import logout from "../../assets/img/logout.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataUser,
  updateDataUser,
  updateImageUser,
} from "../../stores/actions/user";

import "./ManageProfile.css";
// import { useParams } from "react-router-dom";
import avatar from "../../assets/img/profile-default.svg";

export default function ManageProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const { userId } = useParams();
  const userId = user.data.userId;

  const [form, setForm] = useState(user.data);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formImage, setFormImage] = useState(user.data);

  useEffect(() => {
    dispatch(getDataUser(userId));
  }, []);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    await dispatch(updateDataUser(form));
    await dispatch(getDataUser(userId));
    setShowToast(true);
    setIsLoading(false);
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in formImage) {
      formData.append(data, formImage[data]);
    }
    dispatch(updateImageUser(formData)).then(() => {
      dispatch(getDataUser(userId));
    });
  };

  const handleChangeFormImage = (e) => {
    const { name, files } = e.target;
    setFormImage({ ...formImage, [name]: files[0] });
  };

  return (
    <>
      <Header />
      <main className="primary-profile">
        <div className="left-profile">
          <div className="left-profile-photo">
            <img
              className="photo"
              src={
                user.data.image
                  ? `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${user.data.image}`
                  : require("../../assets/img/profile-default.svg")
              }
              alt="edit photo"
            />
            <p className="description">{user.data.username}</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image" src={profileDefault} alt="" />
            <p className="description">Profile</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image" src={editProfile} alt="" />
            <p className="description">Edit Profile</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image" src={changePassword} alt="" />
            <p className="description">Change Password</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image" src={booking} alt="" />
            <p className="description">My Booking</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image" src={wishlist} alt="" />
            <p className="description">My Wishlist</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image" src={setting} alt="" />
            <p className="description">Setting</p>
          </div>
          <div className="left-profile-edit">
            <img className="description-image-logout" src={logout} alt="" />
            <p className="description-logout">Logout</p>
          </div>
        </div>
        <div className="right-profile">
          <h1 className="title-profile">Profile</h1>
          <div className="form">
            <form className="form-input-profile" onSubmit={handleUpdate}>
              <div className="form-input">
                <label className="label-profile">Name</label>
                <input
                  className="label-profile"
                  type="text"
                  name="name"
                  onChange={handleChangeForm}
                  value={form.name}
                />
              </div>
              <div className="form-input">
                <label className="label-profile">Username</label>
                <input
                  className="label-profile"
                  type="text"
                  name="username"
                  onChange={handleChangeForm}
                  value={form.username}
                />
              </div>
              <div className="form-input">
                <label className="label-profile">Email</label>
                <input
                  className="label-profile"
                  type="text"
                  value={form.email}
                />
              </div>
              {/* <div className="form-input">
                <label className="label-profile">Phone Number</label>
                <input
                  className="label-profile"
                  type="number"
                  placeholder="Input Phone Number..."
                  name="name"
                  onChange={handleChangeForm}
                  value={form.name}
                />
              </div> */}
              <div className="form-input">
                <label className="label-profile">Gender</label>
                <input
                  className="label-profile"
                  type="text"
                  name="gender"
                  onChange={handleChangeForm}
                  value={form.gender}
                />
              </div>
              <div className="form-input">
                <label className="label-profile">Profession</label>
                <input
                  className="label-profile"
                  type="text"
                  name="profession"
                  onChange={handleChangeForm}
                  value={form.profession}
                />
              </div>
              <div className="form-input">
                <label className="label-profile">Nationality</label>
                <input
                  className="label-profile"
                  type="text"
                  name="nationality"
                  onChange={handleChangeForm}
                  value={form.nationality}
                />
              </div>
              <div className="form-input">
                <label className="label-profile">Birthday Date</label>
                <input
                  className="label-profile"
                  type="date"
                  name="dateOfBirth"
                  onChange={handleChangeForm}
                  value={form.dateOfBirth}
                />
              </div>
            </form>
            <div className="col-sm-4 form-image-user">
              <div className="image_profil">
                {user.data.image ? (
                  <>
                    <img
                      src={`https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${user.data.image}`}
                      alt="image"
                      className="avatar-profil"
                    />
                  </>
                ) : (
                  <img className="avatar-profil" src={avatar} alt="" />
                )}
              </div>
              <br />
              {user.message && (
                <div
                  className={
                    "alert alert-dismissible fade show " + user.isError
                      ? "alert-success"
                      : "alert-primary"
                  }
                  role="alert"
                >
                  {user.message}
                </div>
              )}
              <div className="text-center">
                <div className="button-choose text-center">
                  <input
                    type="file"
                    name="image"
                    onChange={handleChangeFormImage}
                  />
                </div>
                <button
                  onClick={handleUpdateImage}
                  type="button"
                  className=" my-5 btn btn-primary choose-photo"
                >
                  {user.isLoading ? (
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <div>Save</div>
                  )}
                </button>
              </div>
            </div>
          </div>
          {!isLoading ? (
            <button className="button-save" onClick={handleUpdate}>
              Save
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
          <ToastContainer
            position="top-center"
            className="p-3 position-fixed toast-container"
          >
            <Toast
              show={showToast}
              onClose={() => {
                setShowToast(false);
              }}
            >
              <Toast.Header>
                <strong className="me-auto">Success</strong>
                <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>Your profile is updated</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
