import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Songitem = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          color: "white",
          padding: "10px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            height: "80px",
            width: "100%",
            backgroundColor: "black",
            display: "flex",
            gap: "2%",
            lineHeight: "24px",
          }}
        >
          <img
            src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/20230614165945000/8907212007012/1686816917782/resources/8907212007012.jpg"
            alt=""
            style={{ height: "100%", width: "10%" }}
          />
          <p
            style={{
              fontSize: "18px",
              fontFamily: "sans-serif,Roboto",
              fontStretch: "extra-expanded",
            }}
          >
            Zara In love with React & Next <br />{" "}
            <span>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "sans-serif,Roboto",
                  fontStretch: "extra-expanded",
                  color: "GrayText",
                  textDecoration: "underline",
                  marginTop: "10px",
                }}
              >
                ArjithSing
              </p>
            </span>
          </p>
        </div>
        <div style={{ color: "white", display: "flex", gap: "40px" }}>
          <button style={{}}>
            <DeleteIcon />
          </button>
          <button
            style={{
              backgroundColor: "red",
              width: "50px",
              height: "30px",
              marginTop: "27px",
              borderRadius: "20%",
            }}
          >
            <h4>play</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Songitem;
