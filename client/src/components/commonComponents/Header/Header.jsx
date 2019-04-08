import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <ul className="navigationList">
          <li className="navItem">
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/store">
              Store
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
