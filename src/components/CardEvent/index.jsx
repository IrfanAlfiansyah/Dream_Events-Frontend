import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Card.css";

function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/eventdetail/${props.data.eventId}`);
  };
  return (
    <main className="container" onClick={handleDetail}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${props.data.image}`}
          alt="Card Image Cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.detail}</p>
        </div>
      </div>
    </main>
  );
}

export default CardEvent;
