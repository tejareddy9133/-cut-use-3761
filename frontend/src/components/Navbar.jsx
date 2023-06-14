import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <nav
        className="nav"
        style={{
          maxWidth: "95%",
          margin: "auto",
          height: "72px",
          // border: "1px solid black",
          backgroundColor: "orange",
        }}
      >
        <input type="checkbox" id="nav-check" />
        <div className="nav-header ">
          <div
            className="nav-title"
            style={{
              height: "72px",

              maxWidth: "190px",
            }}
          >
            <img
              src={require("../data/images/Navbar/logo.jpg")}
              alt="logo"
              style={{ height: "100%", width: "210px" }}
            />
          </div>
        </div>
        <div className="nav-btn">
          <label id="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
