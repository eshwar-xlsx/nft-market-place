import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BiddingPage = () => {
  const location = useLocation();
  const { img_url, text, price } = location.state || {};
  const [timer, setTimer] = useState(60);
  const [currentBid, setCurrentBid] = useState(price);
  const [yourBid, setYourBid] = useState("");
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setWinner(true);
    }
  }, [timer]);

  const handleBid = () => {
    const bidAmount = parseFloat(yourBid);
    if (bidAmount > currentBid) {
      setCurrentBid(bidAmount);
    } else {
      alert("Your bid must be higher than the current bid!");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Bidding for: {text}</h1>
      <img
        src={img_url}
        alt="Product"
        className="img-fluid"
        style={{ maxHeight: "300px", objectFit: "cover" }}
      />
      <h2 className="mt-4">Current Price: ${currentBid}</h2>
      <h3>Time Remaining: {timer} seconds</h3>

      {!winner ? (
        <>
          <div className="mt-4">
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter your bid"
              value={yourBid}
              onChange={(e) => setYourBid(e.target.value)}
            />
            <button className="btn btn-primary mb-5 mt-3" onClick={handleBid}>
              Place Bid
            </button>
          </div>
        </>
      ) : (
        <h3 className="mt-4 ">
          {currentBid > price
            ? `Bidding has ended. Winning bid: $${currentBid}`
            : "No bids were placed. Original price remains."}
        </h3>
      )}
    </div>
  );
};

export default BiddingPage;
