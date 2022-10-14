import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/CardEvent";

import { useSelector, useDispatch } from "react-redux";
import { getDataEvent, createDataEvent } from "../../stores/actions/event";

export default function ManageEvent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  const [form, setForm] = useState();
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Hanya digunakan untuk form yg memiliki type data file
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(createDataEvent(formData)).then(() => {
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const resetForm = () => {
    setForm({
      category: "",
      location: "",
      detail: "",
      dateTimeShow: "",
      price: "",
      name: "",
      image: "",
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

  useEffect(() => {
    dispatch(getDataEvent());
  }, []);
  return (
    <>
      <Header />
      <div className="card container p-4">
        <h1 className="text-center">Manage Event</h1>
        <hr />
        {event.message && (
          <div className={"alert alert-dismissible fade show "} role="alert">
            {event.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label className="me-3">Category</label>
          <input
            type="text"
            className="w-100"
            name="category"
            onChange={handleChangeForm}
            // value={form.category}
          />
          <label className="me-3">Location</label>
          <input
            type="text"
            className="w-100"
            name="location"
            onChange={handleChangeForm}
            // value={form.location}
          />
          <label className="me-3">Detail</label>
          <input
            type="text"
            className="w-100"
            name="detail"
            onChange={handleChangeForm}
            // value={form.detail}
          />
          <label className="me-3">Date Show</label>
          <input
            type="text"
            className="w-100"
            name="dateTimeShow"
            onChange={handleChangeForm}
            // value={form.dateTimeShow}
          />
          <label className="me-3">Price</label>
          <input
            type="numeric"
            className="w-100"
            name="price"
            onChange={handleChangeForm}
            // value={form.price}
          />
          <label className="me-3">Name</label>
          <input
            type="text"
            className="w-100"
            name="name"
            onChange={handleChangeForm}
            // value={form.name}
          />
          <label className="me-3">Input Image</label>
          <input
            type="file"
            className="w-100"
            name="image"
            onChange={handleChangeForm}
          />
          {image && <img src={image} alt="preview image" className="w-100" />}
          <button type="submit" className="w-100 my-5 btn btn-primary">
            {event.isLoading ? (
              <div className="spinner-border text-white" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <div>Save</div>
            )}
          </button>
        </form>
      </div>
      <main className="container d-flex gap-3 my-5">
        {event.data.length > 0 ? (
          event.data.map((item) => (
            <div key={item.eventId}>
              <Card
                data={{
                  name: "syncronize",
                  price: 5000,
                }}
              />
            </div>
          ))
        ) : (
          <html>Data Not Found</html>
        )}
      </main>
      <Footer />
    </>
  );
}
