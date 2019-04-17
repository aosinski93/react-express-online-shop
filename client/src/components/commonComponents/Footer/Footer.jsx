import React from "react";
import "../../../css_utilities/common.css";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-bar d-flex align-items-center justify-content-center">
      <p>Created by Adam Osiński, {new Date().getFullYear()}&copy;</p>
    </div>
  );
};

export default Footer;
