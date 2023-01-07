import React from "react";
import "./videoStyle.css";
import god from "../assets/video.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={god} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Discover God of war</h1>
        <p>
          From Santa Monica Studio comes the sequel to the critically acclaimed
          God of War (2022).{" "}
        </p>
        <div>
          <Link to="/Community" className="btn">
            Community
          </Link>
          <Link to="/Merchandise " className="btn btn-light">
            Merchandise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
