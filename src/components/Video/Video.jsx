import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
import trailer from "../../assets/trailer_hd.mp4";
import thumbnail from "../../assets/thumbnail.jpg";

function Video() {
  return (
    <div className="player__main">
      <ReactPlayer
        url={trailer}
        width="100%"
        height="448px"
        poster={thumbnail}
        controls
        onError={() => console.log("onError Callback")}
      />
      ;
    </div>
  );
}

export default Video;
