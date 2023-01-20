import React from "react";
import { useNavigate } from "react-router-dom";
// import { deleteDataEvent, getDataEvent } from "../../stores/actions/event";
// import { useDispatch } from "react-redux";
import "./Card.css";

function CardEvent(props) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleDetail = () => {
    navigate(`/eventdetail/${props.data.eventId}`);
  };

  // const handleDeleteEvent = async (eventId) => {
  //   try {
  //     await dispatch(deleteDataEvent(eventId));
  //     getDataEvent();
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  return (
    <main className="container-img">
      <div className="card">
        <img
          className="card-event-name"
          src={`https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${props.data.image}`}
          alt="Card Image Cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.detail}</p>
          <p className="card-text">{props.data.dateTimeShow}</p>
          <button
            className="btn-card-img btn-primary col-4"
            onClick={handleDetail}
          >
            Detail
          </button>
          {props.manageEvent ? (
            <>
              <button
                className="btn btn-secondary col-4"
                onClick={() => props.setUpdate(props.data)}
              >
                Update
              </button>
              <button
                className="btn btn-danger col-4"
                onClick={() => handleDetail}
              >
                Delete
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}

export default CardEvent;
