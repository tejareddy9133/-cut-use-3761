import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";

const Songitem1 = ({ song }) => {
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://lucky-pumps-deer.cyclic.app/admin/allSongs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert(res.data);
        window.location.reload();
      });
  };

  const handleAdd = (id) => {
    console.log(id);
    axios
      .post(`https://lucky-pumps-deer.cyclic.app/user/allSongs/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        alert(res.data);
      });
  };
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
            src={song.image_url}
            alt={song.artist}
            style={{ height: "100%", width: "10%" }}
          />
          <p
            style={{
              fontSize: "18px",
              fontFamily: "sans-serif,Roboto",
              fontStretch: "extra-expanded",
            }}
          >
            {song.name}{" "}
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
                {song.artist}
              </p>
            </span>
          </p>
        </div>
        <div style={{ color: "white", display: "flex", gap: "40px" }}>
          <button onClick={() => handleDelete(song._id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Songitem1;
