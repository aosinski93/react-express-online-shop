import React from "react";
import "../../../css_utilities/common.css";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerBar flex h-align v-align">
      <p>Created by Adam Osiński, {new Date().getFullYear()}&copy;</p>
    </div>
  );
};

export default Footer;
