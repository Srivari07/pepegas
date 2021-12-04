import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
import trailer from "./trailer_hd.mp4";

function Video() {
  return (
    <div className="player__main">
      <ReactPlayer
        url={trailer}
        width="100%"
        height="448px"
        controls
        light
        poster=""
        onError={() => console.log("onError Callback")}
      />
      ;
    </div>
  );
}

export default Video;
