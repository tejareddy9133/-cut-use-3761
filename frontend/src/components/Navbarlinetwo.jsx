import React, { useEffect, useState } from "react";
import "../css/Navbarlinetwo.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
//
import PersonIcon from "@mui/icons-material/Person";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Navbarlinetwo = () => {
  const [authclass, setauthclass] = useState(true);
  const [style, setstyle] = useState("cont123");
  const navigate = useNavigate();
  const sidebarclick = () => {
    setstyle("open123");
  };

  const closesidebar = () => {
    // document.getElementsByClassName("sidebar").style.display="none";
    // setstyle("cont123")

    setstyle("cont123");
  };
  // console.log(authclass,"authclass")
  return (
    <div>
      <div className={style}></div>

      <div className="nav">
        <div className="containernav">
          <ul>
            <li
              style={{ display: "flex", gap: "4px", marginTop: "4px" }}
              className="borderwhite"
            >
              <span className="opennavslider">
                <div style={{ marginTop: "4px" }}>
                  <DehazeIcon />
                </div>
              </span>
              <span style={{ marginTop: "4px" }}> All</span>
            </li>
            <li className="borderwhite">
              <Link href="/shoes"> Trending Now</Link>
            </li>

            <li
              className="borderwhite"
              onClick={() => navigate("playlistpage")}
            >
              <Link href="/womenShoes"> Playlist</Link>
            </li>
            <li className="borderwhite">
              <Link href="."> New Songs</Link>
            </li>
            <li className="borderwhite">
              <Link href="."> Moods & Genre</Link>
            </li>
            <li className="borderwhite primeimagehover1">
              <Link href=".">
                {" "}
                Top Albums <i className="fa fa-caret-down"></i>{" "}
              </Link>
              <div className="primeimage1">
                <div>
                  <a href="#">Top Hindi Albums</a>
                </div>
                <hr />
                <div>
                  <a href="#">Top English Albums</a>
                </div>
                <hr />
                <div>
                  <a href="#">Top Telgu Albums</a>
                </div>
                <hr />
              </div>
            </li>
            <li className="borderwhite">
              <Link href="."> Top Artist</Link>
            </li>
            <li className="borderwhite primeimagehover1">
              <Link href=".">
                Top Playlist <i className="fa fa-caret-down"></i>
              </Link>
              <div className="primeimage1">
                <div>
                  <a href="#">Top 100 Songs</a>
                </div>
                <hr />
                <div>
                  <a href="#">Top Trending Songs</a>
                </div>
                <hr />
                <div>
                  <a href="#">Latest Trending Songs</a>
                </div>
                <hr />
              </div>
            </li>
            <li className="borderwhite primeimagehover">
              <Link href="."> {"Podcast>"} </Link>

              <div className="primeimage">
                <img
                  style={{
                    width: "93%",
                    height: "auto",
                    padding: "10px 10px",
                    margin: "auto",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                  src="https://static.vecteezy.com/system/resources/previews/002/157/610/original/illustrations-concept-design-podcast-channel-free-vector.jpg"
                ></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbarlinetwo;
