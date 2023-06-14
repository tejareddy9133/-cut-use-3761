import React from "react";
import "../css/Subsccription.css";
const Subscription = () => {
  return (
    <>
      <div className="container">
        <div className="first">
          <h1 style={{ color: "white" }}>Vibe Tunes</h1>
        </div>
        <div className="second">
          <div className="modal">
            <h2
              style={{
                color: "red",
                fontFamily: "Stencil, fantasy",
              }}
            >
              Go Premium
            </h2>
            <p style={{ color: "white" }}>Get the best music and pod casts</p>
            <div className="subscibemethods">
              <div className="child">
                <h4 style={{ color: "white" }}>
                  Yearly <br />{" "}
                  <span
                    style={{ color: "grey", textDecoration: " line-through" }}
                  >
                    ₹999
                  </span>{" "}
                  ₹399 <br /> Save 60%
                </h4>
              </div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
