import React from "react";

import './About_Us.css'

const About_Us = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-white text-center display-4">About Us</h1>
            <p className="text-white-50 text-center">
              Discover the future of digital ownership
            </p>
          </div>
          <div className="row mt-5">
            {/* Text Section */}
            <div className="col-md-8">
              <h2
                className="text-white text-center"
                style={{ fontSize: "30px", marginTop: "30px" }}
              >
                What are NFTs and why are they important?
              </h2>
              <p className="text-white-50 mt-4">
                NFTs, or Non-Fungible Tokens, are revolutionizing the way we think
                about digital ownership. These tokens are unique and stored on a
                blockchain, making them irreplaceable. NFTs can represent anything
                from art and music to virtual real estate and collectibles. With
                NFTs, creators and buyers are empowered to trade digital assets in
                a secure, transparent, and decentralized marketplace.
              </p>
              <p className="text-white-50 mt-4">
                Our NFT marketplace is designed to help creators showcase their
                digital works, while collectors can purchase exclusive pieces
                directly from the creators. Join us in the next wave of the digital
                economy where creativity meets blockchain technology.
              </p>
            </div>

            {/* Video Section */}
            <div className="col-md-4">
              <div
                style={{ height: "300px", width: "100%", borderRadius: "15px" }}
                className="shadow-lg col-md-4 d-flex align-items-center justify-content-center"
              >
                <video
                  muted
                  autoPlay
                  loop
                  className="home-video"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="assets/about-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div  className="row mt-5">
            <div className="col-md-12">
              <h2 className="text-center text-primary">Client Reviews</h2>
            </div>
            <div className="col-md-10 mx-auto mt-4">
              <div className="row">
                {[
                  { name: "Liam Mendes", username: "@liammendes", stars: 4, img: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" },
                  { name: "Noah Wood", username: "@noahwood", stars: 5, img: "./assets/icon-1.png" },
                  { name: "Oliver Queen", username: "@oliverqueen", stars: 4, img: "./assets/icon-2.png" },
                  { name: "Barry Allen", username: "@barryallen", stars: 4, img: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" },
                ].map((client, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="card bg-light shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={client.img}
                            alt={client.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "40px",
                              marginRight: "15px",
                            }}
                          />
                          <div>
                            <h5 className="mb-0">{client.name}</h5>
                            <small className="text-muted">{client.username}</small>
                          </div>
                        </div>
                        <div className="mb-3">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fa-star ${
                                i < client.stars ? "fas text-warning" : "far text-secondary"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Us;
