import React, { useState, useEffect } from "react";
import "./Home.css";
import Card_For_Tokens from "./Card_For_Tokens";
import Creative_Collectors from "./Creative_Collectors";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Shorter duration for smoother animation
      easing: "ease-out",
      once: true, // Prevent repeating animation
    });
  }, []);
  const [text, setText] = useState("NFT");

  const texts = ["Crypto", "Tokens", "Assets", "NFT"];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const cardData = [
    { title: "232-T", owner: "John Doe", imageUrl: "assets/colored_fox.gif" },
    { title: "233-T", owner: "Jane Smith", imageUrl: "assets/monkey_1.jpg" },
    { title: "234-T", owner: "Alice Johnson", imageUrl: "assets/srk2.webp" },
    {
      title: "234-T",
      owner: "Alice Johnson",
      imageUrl: "assets/home-earth.webp",
    },
    {
      title: "234-T",
      owner: "Alice Johnson",
      imageUrl: "assets/home-woman.jpg",
    },
    {
      title: "234-T",
      owner: "Alice Johnson",
      imageUrl: "assets/doodle_gun.gif",
    },
    {
      title: "233-T",
      owner: "Jane Smith",
      imageUrl: "assets/home-soldier.jpg",
    },
    { title: "232-T", owner: "John Doe", imageUrl: "assets/home-2.webp" },
  ];

  const sellers = [
    { name: "Artist 1", imageUrl: "assets/user1.webp", count: 25 },
    { name: "Artist 2", imageUrl: "assets/user1.webp", count: 40 },
    { name: "Artist 3", imageUrl: "assets/user1.webp", count: 30 },
    { name: "Artist 4", imageUrl: "assets/user1.webp", count: 50 },
    { name: "Artist 5", imageUrl: "assets/user1.webp", count: 60 },
    { name: "Artist 6", imageUrl: "assets/user1.webp", count: 10 },
  ];

  return (
    <>
      <div className="container-fluid home-container bg-dark">
        <div className="row justify-content-center home-row h-25">
          <div className="col-md-7 text-start bg-dark text-white p-5 rounded-lg shadow-lg col-sm-12">
            <h2 className="mt-5 dynamic-heading text-center display-2 ">
              GET THE <br></br> 
              <span className="fw-bolder" style={{fontFamily:"fantasy"}}>{" "}</span>
              <span style={{ color: "#00D4FF", fontWeight: "bold" }}>
                {text}
              </span>{" "}
              you want!
            </h2>
            <p className="" style={{ marginTop: "80px" , fontSize:"22px",fontFamily:"inherit  " }}>
              Explore our vast collection of NFTs, ranging from crypto assets to
              rare collectibles. Join the bidding, claim your favorite NFTs, and
              become part of the digital revolution!
            </p>
            <div className="text-center mt-4">
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <Link to="/explore">
                  <button className="button-30 mx-2 my-2 my-sm-0">
                    Explore More
                  </button>
                </Link>
                <Link to="/categories">
                  <button className="button-30 mx-2 my-2 my-sm-0">
                    Collect NFT
                  </button>
                </Link>
              </div>
            </div>
            
          </div>

          <div className="h-25 video-container shadow-lg col-md-5 col-12 d-flex align-items-center justify-content-center">
            <video muted autoPlay loop className="home-video">
              <source src="assets/Recording-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12" style={{ marginTop: "40px" }}>
            <h2
              data-aos="zoom-in-up"
              className="text-center mt-5"
              style={{ color: "#BB73B3" }}
            >
              Our Top Collectibles
            </h2>
            <p>See what People are buying!</p>

            <h1 className="text-center display-5 mb-3">Popular Collections</h1>
            <h3 className="text-center enhanced-text mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              modi id quae eos excepturi labore assumenda rem quas
            </h3>

            {/* Card Grid */}
            <div className="row justify-content-center shadow mb-3">
              {cardData.map((card, index) => (
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                  key={index}
                >
                  <Card_For_Tokens
                    title={card.title}
                    owner={card.owner}
                    imageUrl={card.imageUrl}
                  />
                </div>
              ))}
            </div>

            {/* Creative Collectors */}
            <div className="row mt-5">
              <div className="col-md-12">
                <p
                  className="text-center"
                  style={{ color: "#BB73B3", fontSize: "25px" }}
                >
                  Creative Collectors
                </p>
                <h5 className="text-center text-white-50">
                  Top Sellers This Month!
                </h5>{" "}
                <br />
                <h4 className="text-white text-center">
                  Explore more about{" "}
                  <span style={{ color: "blueviolet" }}>Creator </span> !
                </h4>
                <div className="row" data-aos="zoom-in-right">
                  <Creative_Collectors artists={sellers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
