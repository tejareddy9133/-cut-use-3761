import React, { useEffect, useState } from "react";
import Songitem from "../components/Songitem";
import axios from "axios";
import { Music } from "../components/Music";
import Songitem1 from "../components/songItem1";

const Playlistpage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [image_url, setImage_url] = useState("");
  const [data, setData] = useState([]);

  const Submithandler = () => {
    const id = localStorage.getItem("id");
    axios
      .get(
        `https://lucky-pumps-deer.cyclic.app/user/allSongs/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        alert(response.data.msg);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://lucky-pumps-deer.cyclic.app/allSongs", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData(res.data.songs);
        localStorage.setItem("songs", JSON.stringify(res.data.songs));
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div>
        <h1
          style={{
            fontSize: "36px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "40px",
            letterSpacing: "normal",
            textAlign: "center",
          }}
        >
          User PlayList
        </h1>
        <p
          style={{
            textAlign: "start",
            color: "gray",
            lineHeight: "40px",
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
          }}
        ></p>
        <p
          style={{
            textAlign: "start",
            color: "gray",
            lineHeight: "40px",
            fontSize: "12px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          <div>
            <h3>Add New Song</h3>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="artist"
              onChange={(e) => setArtist(e.target.value)}
            />
            <input
              type="text"
              placeholder="image_url"
              onChange={(e) => setImage_url(e.target.value)}
            />
            <input
              type="text"
              placeholder="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <input type="Submit" onClick={() => Submithandler()} />
          </div>
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
            User
          </button>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="somgitems" style={{ marginTop: "50px" }}>
          {data.length > 0 ? (
            data.map((e) => {
              return <Songitem1 key={e._id} song={e} />;
            })
          ) : (
            <div> No Songs</div>
          )}
        </div>
      )}
      <div
        style={{
          // border: "1px solid red",
          padding: "0%",
          margin: "0%",
          height: "150px",
          overflow: "hidden",
          // paddingTop: "-15px",
        }}
      >
        <Music song={data} />
      </div>
    </div>
  );
};

export default Playlistpage;
