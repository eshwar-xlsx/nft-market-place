import React from "react";

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
          <div className="row" style={{ marginTop: "50px" }}>
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
              style={{ height: "300px", width: "100%", borderRadius:"50px" }}
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
        </div>
      </div>
    </>
  );
};

export default About_Us;
