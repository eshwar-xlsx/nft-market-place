// Categories_Card.js
import React from "react";

const Categories_Card = ({ game_image, game_title, game_price }) => {
  return (
    <div className="card">
      <img src={game_image} alt={game_title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{game_title}</h5>
        <p className="card-text">Price: {game_price}</p>
        <button className="btn btn-sm btn-outline-success ">Buy Now</button>
      </div>
    </div>
  );
};


export default Categories_Card;
