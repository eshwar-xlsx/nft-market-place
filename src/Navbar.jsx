import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark text-white"
        style={{
          fontSize: "18px",
          position: "sticky",
          top: "0",
          zIndex: "100",
          
          
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white fw-bold" to="/">
            <img
              src="./assets/logo.png"
              alt="NFT Marketplace"
              style={{
                height: "100px",
                marginRight: "10px",
                width: "120px",
                borderRadius: "",
                position: "relative",
                top: "0",
                objectFit: "contain",
              }}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            {/* Center Links */}
            <ul className="navbar-nav mx-auto mb-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border
 text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white bottom-border
" to="/explore">
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white bottom-border bottom-border
"
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white bottom-border
" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white bottom-border
" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center">
              <div className="d-flex ">
                <img
                  style={{
                    height: "80px", // Reduced avatar size
                    width: "80px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  className="img-fluid"
                  src="https://unitok.volkovdesign.com/img/avatars/avatar5.jpg"
                  alt="User Avatar"
                />
                <div style={{ margin: "10px" }}>
                  <h6 className="mb-0 text-white" style={{ fontSize: "20px" }}>
                    Aisha
                  </h6>
                  <h6
                    className="mb-0"
                    style={{ color: "lightblue", fontSize: "16px" }}
                  >
                    13 ETC
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
