import React, { useEffect } from "react";
import "../css/homepage.css";


import SimpleSlider from "../components/slider/top";
import Responsive2 from "../components/slider/second";
import { First } from "../components/slider/first";
export const HomePage = () => {
  useEffect(() => {
    console.log(process.env.url);
  }, []);
  return (
    <div>
    <div><First/></div>
      
      <div style={{ backgroundColor: "#0c0f12", color: "white" }}>
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
