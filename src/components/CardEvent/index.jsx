import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function CardEvent() {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/event`);
  };
  return (
    <main className="container" onClick={handleDetail}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body" style={{ color: "white" }}>
          <h5 className="card-title">ee</h5>
          <p className="card-text">adas</p>
        </div>
      </div>
    </main>
  );
}

export default CardEvent;
