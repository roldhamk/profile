import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="maincard">
      <img src={props.image} alt="" />
      <p className="title">{props.title}</p>
      <p className="date">{props.links}</p>
    </div>
  );
};

export default Card;
