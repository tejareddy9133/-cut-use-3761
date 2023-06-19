import React, { useEffect, useRef, useState } from "react";
// import "./player.scss";
import "../css/musicplayer.css";
import "./player.css";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();
  useEffect(() => {
    console.log(currentSong);
  });
  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const clickPosition = (offset / width) * 100;
    const newProgress = (clickPosition / 100) * currentSong?.duration;

    // setProgress(newProgress);
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x?.name == currentSong?.name);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x?.name == currentSong?.name);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div>
      <div className="music-player">
        <div
          className="container"
          style={{
            backgroundColor: "orange",
            alignContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              textAlign: "center",
              alignItems: "center",
              width: "200px",
            }}
          >
            <img
              src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/648b1bbf2ac5bd4b7dbaf2ca/COLLECTION_345746689813972.png"
              alt="image"
              style={{ width: "100px", height: "100px" }}
            />
            <h5>{currentSong?.name}</h5>
          </div>
          <div
            className="controls"
            style={{ display: "flex", flexDirection: "row", gap: "10px" }}
          >
            <BsFillSkipStartCircleFill
              className="btn_action"
              onClick={skipBack}
              fontSize={"30px"}
            />
            {isplaying ? (
              <BsFillPauseCircleFill
                className="btn_action pp"
                onClick={PlayPause}
                fontSize={"35px"}
              />
            ) : (
              <BsFillPlayCircleFill
                className="btn_action pp"
                onClick={PlayPause}
                fontSize={"35px"}
              />
            )}
            <BsFillSkipEndCircleFill
              className="btn_action"
              onClick={skiptoNext}
              fontSize={"30px"}
            />
          </div>
          {/* <div> */}{" "}
          <div className="navigation">
            <div
              className="navigation_wrapper"
              onClick={checkWidth}
              ref={clickRef}
              //   style={{ border: "1px solid red" }}
            >
              <h1>{currentSong?.artist}</h1>
              <div
                className="seek_bar"
                style={{
                  width: `${currentSong?.progress + "%"}`,
                  border: "1px solid red",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
