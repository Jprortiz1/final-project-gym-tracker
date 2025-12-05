import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__spinner" />
      <p className="preloader__text">Loading...</p>
    </div>
  );
}

export default Preloader;
