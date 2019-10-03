import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.onClick(props.id)} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
