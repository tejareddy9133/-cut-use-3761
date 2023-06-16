import React, { useEffect, useState } from "react";
import "../css/Header.css";
import logo from "../image/logo.jpg";

const Header = () => {
  const [style, setstyle] = useState("cont123");
  const icon = document.querySelector(".icon");
  const search = document.querySelector(".search");
  const displaydown = () => {
    setstyle("open123");
  };

  return (
    <div className="header">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ display: "flex", flexDirection: "row", columnGap: "4px" }}
          className="first"
        >
          <div style={{ border: "0px solid red", borderRadius: "30px" }}>
            <img
              style={{ width: "100px", borderRadius: "30px" }}
              src={logo}
              alt="logo"
            />
          </div>

          <div style={{ border: "0px solid red", marginLeft: "20px" }}>
            Vibe Tunes
          </div>
        </div>
      </div>

      {/*  space */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="second">
          <div className="search">
            <div className="icon"></div>
            <div className="input">
              <input
                style={{ color: "white" }}
                type="text"
                placeholder="search songs"
                id="mysearch"
              />
            </div>
          </div>
        </div>
        <div className="third">Manage Subscription</div>
        <div className="fourth">
          <i style={{ fontSize: "20px" }} className="fa fa-user"></i>
          &nbsp; Login
        </div>

        <div className="fifth">
          {/*   <div style={{ cursor: "pointer" }} onClick={displaydown}>

                        <i class="fa fa-bars"></i>
                    </div>  */}

          <div className="dropdown">
            <button className="dropbtn">
              {" "}
              <i className="fa fa-bars"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">
                <i class="fa fa-download"></i> &nbsp;Download App
              </a>
              <a href="#">
                <i class="fa fa-language"></i> &nbsp;Select Language
              </a>
              <a href="#">
                <i class="fa fa-language"></i> &nbsp;Sound Quantity
              </a>
              <a href="#">
                <i class="fa fa-language"></i> Podcast
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
