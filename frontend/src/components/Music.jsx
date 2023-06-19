import { useEffect, useState, useRef } from "react";
import Player from "./Player";
import { songsdata } from "./audio";
import axios from "axios";
export const Music = () => {
  const song =JSON.parse( localStorage.getItem("songs"));
  const [songs, setSongs] = useState({ song });
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(song[1]);
  const [loading, setLoading] = useState(false);

  const audioElem = useRef();

  useEffect(() => {
    console.log(song);
    if (song.length === 0) return;
    setSongs(song);
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <audio
            src={currentSong?.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          />
          <Player
            songs={songs}
            setSongs={setSongs}
            isplaying={isplaying}
            setisplaying={setisplaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </>
      )}
    </div>
  );
};
