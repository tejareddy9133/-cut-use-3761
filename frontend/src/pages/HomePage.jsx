import React, { useEffect } from "react";
import "../css/homepage.css";

import Header from "../components/Header";
import Navbarlinetwo from "../components/Navbarlinetwo";
import SimpleSlider from "../components/slider/top";
import Responsive2 from "../components/slider/second";
import { First } from "../components/slider/first";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Navbarlinetwo />

      <div
        style={{
          backgroundColor: "#0c0f12",
          color: "white",
          border: "1px solid white",
        }}
        onClick={() => navigate("/playlist")}
      >
        <div className="slider-one">
          <SimpleSlider />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            New Release
          </h1>
          <Responsive2 />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            Your Personalized Mixes
          </h1>
          <Responsive2 />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            Top Charts
          </h1>
          <Responsive2 />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            Recommended Playlists
          </h1>
          <Responsive2 />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            Based On Your Recent Activity
          </h1>
          <Responsive2 />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            Indie Music
          </h1>
          <Responsive2 />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              padding: "20px",
              paddingBottom: "10px",
              textDecoration: "bold",
            }}
          >
            Top Artists
          </h1>
          <Responsive2 />
        </div>
      </div>
    </div>
  );
};
