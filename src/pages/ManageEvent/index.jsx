import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Card from "../../components/CardEvent";

import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
} from "../../stores/actions/event";

import moment from "moment";

export default function ManageEvent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);

  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [eventId, setEventId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getDataEvent());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // HANYA DIGUNAKAN KETIKA INPUT ADA YANG BERTIPE DATA FILE
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent());
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const setUpdate = (data) => {
    data.dateTimeShow = new Date();
    setIsUpdate(true);
    setEventId(data.eventId);
    setForm({
      name: data.name,
      price: data.price,
      category: data.category,
      location: data.location,
      detail: data.detail,
      dateTimeShow: moment(data.dateTimeShow).format("YYYY-MM-DD"),
      image: data.image,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(updateDataEvent(formData, eventId)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      image: "",
      category: "",
      detail: "",
      location: "",
      dateTimeShow: "",
    });
    setImage("");
  };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <>
      <Header />
      <div className="card container p-4">
        <h1 className="text-center">Manage Event</h1>
        <hr />
        {event.message && (
          <div
            className={
              "alert alert-dismissible fade show " + event.isError
                ? "alert-danger"
                : "alert-primary"
            }
            role="alert"
          >
            {event.message}
          </div>
        )}
        {/* <p>{JSON.stringify(form)}</p> */}
        <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
          <label className="me-3">Input Name</label>
          <input
            type="text"
            className="w-100"
            name="name"
            onChange={handleChangeForm}
            value={form.name}
          />
          <label className="me-3 mt-3">Input Price</label>
          <input
            type="text"
            className="w-100"
            name="price"
            onChange={handleChangeForm}
            value={form.price}
          />
          <label className="me-3 mt-3">Input Detail</label>
          <input
            type="text"
            className="w-100"
            name="detail"
            onChange={handleChangeForm}
            value={form.detail}
          />
          <label className="me-3 mt-3">Input Location</label>
          <input
            type="text"
            className="w-100"
            name="location"
            onChange={handleChangeForm}
            value={form.location}
          />
          <label className="me-3 mt-3">Input Category</label>
          <input
            type="text"
            className="w-100"
            name="category"
            onChange={handleChangeForm}
            value={form.category}
          />
          <label className="me-3 mt-3">Input Date</label>
          <input
            type="date"
            className="w-100"
            name="dateTimeShow"
            onChange={handleChangeForm}
            value={form.dateTimeShow}
          />
          <label className="me-3 mt-3">Input Image</label>
          <input
            type="file"
            className="w-100"
            name="image"
            onChange={handleChangeForm}
          />
          {image && <img src={image} alt="view image" />}

          <button type="submit" className="w-100 my-5 btn btn-primary">
            {event.isLoading ? (
              <div className="spinner-border text-white" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <div>{isUpdate ? "Update" : "Save"}</div>
            )}
          </button>
        </form>
      </div>
      <main className="container d-flex gap-3 my-5">
        {event.data.length > 0 ? (
          event.data.map((item) => (
            <div key={item.eventId}>
              <Card data={item} setUpdate={setUpdate} manageEvent={true} />
            </div>
          ))
        ) : (
          <h1>Data Not Found !</h1>
        )}
      </main>
      <Footer />
    </>
  );
}
