import React from "react";
import image from "../../assets/img/event.png";
import { useNavigate } from "react-router-dom";

function CardEvent(props) {
  const navigate = useNavigate();
  console.log(props);

  const handleDetail = () => {
    navigate(`/detail/${props.data.id}`);
  };
  return (
    <main className="container d-flex gap-3" onClick={handleDetail}>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.price}</p>
        </div>
      </div>
    </main>
  );
}

export default CardEvent;
