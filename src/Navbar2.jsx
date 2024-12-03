import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar2.css'

const Navbar2 = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block bg-dark" style={{ zIndex: "2000" }}>
          <div className="container-fluid">
            {/* Navbar brand */}
            <NavLink className="navbar-brand nav-link" to="/">
              <strong>MDB</strong>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="#intro">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    target="_blank"
                    rel="nofollow"
                  >
                    Learn Bootstrap 5
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                  >
                    Download MDB UI KIT
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav list-inline">
                {/* Icons */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-youtube"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="https://www.facebook.com/mdbootstrap"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="https://twitter.com/MDBootstrap"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="https://github.com/mdbootstrap/mdb-ui-kit"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-github"></i>
                  </NavLink>
                </li>
              </ul>
              {/* Right Section */}
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  style={{
                    height: "50px", // Reduced avatar size
                    width: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  className="img-fluid"
                  src="https://unitok.volkovdesign.com/img/avatars/avatar5.jpg"
                  alt="User Avatar"
                />
                <div style={{marginRight:"20px"}}>
                  <h6 className="mb-0 text-white" style={{ fontSize: "30px" }}>Aisha</h6>
                  <h6 className="mb-0" style={{ color: "lightblue", fontSize: "18px" }}>
                    13 ETC
                  </h6>
                </div>
              </div>
            </div>
            </div>
          </div>
          
        </nav>
      </header>
    </>
  );
};

export default Navbar2;
