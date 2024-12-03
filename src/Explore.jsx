import React from "react";
import Explore_Card from "./Explore_Card";

// img_url, text, price
const data = [
  {
    img_url: "assets/movies_data_black_cat.gif",
    text: "Lorem ipsum dolor sit amet",
    price: "24",
  },
  {
    img_url: "assets/movies_data_black_cat.gif",
    text: "Lorem ipsum dolor sit amet",
    price: "24",
  },
  {
    img_url: "assets/movies_data_black_cat.gif",
    text: "Lorem ipsum dolor sit amet",
    price: "24",
  },
  {
    img_url: "assets/movies_data_black_cat.gif",
    text: "Lorem ipsum dolor sit amet",
    price: "24",
  },
];

const Explore = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-12  text-center">
            <h1
              style={{ fontSize: "25px", marginTop: "30px", color: "white" }}
            >
              Here Starts The Bidding
            </h1>
            <div
              className="text-white text-end"
              style={{ marginRight: "50px", fontSize: "20px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="green"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <span style={{  fontSize: "20px", marginLeft:"10px" }}>Online </span>{" "}
              : <span style={{ color:"purple", fontWeight:"bolder" }} > 23 </span> 
            </div>
            <p className="mb-5">
              All NFTs have the base price. If you want to have it, participate
              in bidding.
            </p>
          </div>
        </div>
        <div className="row">
          {data.map((val, index) => (
            <div className="col-md-3 col-sm-12" key={index}>
              <Explore_Card
                img_url={val.img_url}
                text={val.text}
                price={val.price}
              />
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white text-end mt-5">This is Live Bidding! </h3>
        </div>
      </div>
    </>
  );
};

export default Explore;
