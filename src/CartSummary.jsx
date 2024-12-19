import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.game_price || item.sports_price || item.movie_price || item.comics_price);
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-white">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-white">Your cart is empty.</p>
          ) : (
            <div>
              <ul className="text-white">
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.game_title || item.sports_title || item.movie_title || item.comics_title} - $
                    {item.game_price || item.sports_price || item.movie_price || item.comics_price}
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <h4>Total: ${calculateTotal()}</h4>
              </div>
            </div>
          )}
          <div className="mt-3">
            <Link to="/" className="btn btn-outline-secondary btn-sm">Back to Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
