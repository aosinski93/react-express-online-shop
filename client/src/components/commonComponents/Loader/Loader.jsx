import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <p className="d-flex">
        <span className="loaderText">Loading</span>
        <span className="first dot">.</span>
        <span className="second dot">.</span>
        <span className="third dot">.</span>
      </p>
    </div>
  );
};

export default Loader;
