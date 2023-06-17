import React from "react";
import Songitem from "../components/Songitem";

const Playlist = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* input section please add here */}
      <div>
        <h1
          style={{
            fontSize: "36px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "40px",
            letterSpacing: "normal",
            textAlign: "start",
          }}
        >
          Arijit All The Way
        </h1>
        <p
          style={{
            textAlign: "start",
            color: "gray",
            lineHeight: "40px",
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          By Vibemusic
        </p>
        <p
          style={{
            textAlign: "start",
            color: "gray",
            lineHeight: "40px",
            fontSize: "12px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          8.5K Followers • 162 Songs • 43 min 55 sec
        </p>
      </div>
      <div
        style={{
          color: "gray",
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Roboto, sans-serif",
            display: "flex",
            width: "231px",
            height: "50px",
            gap: "30%",
          }}
        >
          <button
            style={{
              textAlign: "center",
              padding: "13px",
              paddingRight: "-10px",
              //   paddingLeft: "15px",
              color: "white",
              fontSize: "16px",
              fontFamily: "Roboto, sans-serif",
              display: "flex",
              width: "120px",
              height: "50px",
              backgroundColor: "#ed1c24",
              borderRadius: "40px",
            }}
          >
            Playnow
          </button>
          <button
            style={{
              textAlign: "center",
              padding: "13px",
              paddingRight: "-10px",
              //   paddingLeft: "15px",
              color: "white",
              fontSize: "16px",
              fontFamily: "Roboto, sans-serif",
              display: "flex",
              width: "120px",
              height: "50px",
              backgroundColor: "#ed1c24",
              borderRadius: "40px",
            }}
          >
            Admin
          </button>
        </div>
      </div>
      <div className="somgitems" style={{ marginTop: "50px" }}>
        <Songitem />
        <Songitem />
        <Songitem />
        <Songitem />
        <Songitem />
        <Songitem />
        <Songitem />
        <Songitem />
        <Songitem />
      </div>
    </div>
  );
};

export default Playlist;
