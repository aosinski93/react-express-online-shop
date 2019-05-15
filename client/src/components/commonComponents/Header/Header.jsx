import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
          <ul className="navigation-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link className="nav-link" to="/store">
                Store
              </Link>
            </li>
            <li className="navItem">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Header;
