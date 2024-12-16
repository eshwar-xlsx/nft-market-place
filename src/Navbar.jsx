import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let nav = useNavigate()
  const loginHandler=()=>{
    nav('login-form')
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark text-white "
        style={{
          fontSize: "10px",
          position: "sticky",
          top: "0",
          zIndex: "100",
          // border:"1px solid red"
        }}
      >
        <div className="container-fluid">
          {/* Branding */}
          <NavLink className="navbar-brand text-white fw-bold" to="/">
            <img
              src="./assets/logo.png"
              alt="NFT Marketplace"
              className="brand-logo"
            />
          </NavLink>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            {/* Center Links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border text-white"
                  to="/explore"
                >
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border text-white"
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border text-white"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border text-white"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link bottom-border text-white"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center user-section">
              <img
                src="./assets/nav-icon.png"
                alt="User Avatar"
                className="user-avatar"
                style={{marginLeft:"20px"}}
              />
              <div>
                <h6 className="mb-0 text-white user-name" style={{marginRight:"05px"}}>Aisha</h6>
                <h6
                  className="mb-0"
                  style={{ color: "lightblue", fontSize: "16px"}}
                >
                  13 ETC
                </h6>
                <button onClick={loginHandler} className="text-white-50 bg-dark mt-3 h6">Not a Aisha?</button>
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
