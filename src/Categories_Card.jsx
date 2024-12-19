import React from 'react';

const Categories_Card = ({ game_image, game_title, game_price, onBuyNow }) => {
  return (
    <div className="card">
      <img src={game_image} className="card-img-top" alt={game_title} />
      <div className="card-body">
        <h5 className="card-title">{game_title}</h5>
        <p className="card-text">Price: ${game_price}</p>
        <button className="btn btn-primary" onClick={onBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Categories_Card;
