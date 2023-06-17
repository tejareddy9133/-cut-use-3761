import React, { useState } from "react";

export const Spotify = () => {
  const [keyword, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={() => {
          //   setValue(value);
          //   console.log(value);
        }}
      />
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        search
      </button>
      <div></div>
    </div>
  );
};
