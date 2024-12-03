import React from "react";
import "./Card_For_Tokens.css";

const Card_For_Tokens = ({ title, owner, imageUrl }) => {
  return (
    <div className="card-container">
      <div className="image-wrapper">
        <img src={imageUrl} alt={title} className="card-image"  />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-owner">Owned by : {owner}</p>
      </div>
    </div>
  );
};

export default Card_For_Tokens;
