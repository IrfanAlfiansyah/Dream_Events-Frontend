import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/event/${props.data.id}`);
  };
  return (
    <main className="container" onClick={handleDetail}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body" style={{ color: "white" }}>
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.detail}</p>
        </div>
      </div>
    </main>
  );
}

export default CardEvent;
