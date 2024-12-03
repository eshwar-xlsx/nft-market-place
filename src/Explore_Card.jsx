import React from "react";
import "./Explore_Card.css";

const Explore_Card = ({ img_url, text, price }) => {
  return (
    <div className="wrapper bg-dark" style={{}}>
    
      <div className="banner-image" style={{ backgroundImage: `url(${img_url})` }}></div>
      <h1 className="text-white">{text}</h1>
      <p className="text-white-50">{text}</p>
      <br />
      <p className="text-end" style={{marginRight:"20px", fontSize:"18px"}}>Price: $<span style={{color:"green"}}>{price} </span> </p>
      <div className="button-wrapper text-center mb-3">
        <button className="btn btn-outline-primary">DETAILS</button>
        <button className="btn btn-outline-success ">BUY NOW</button>
      </div>
    </div>
  );
};

export default Explore_Card;
