import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-9">
          {window.location.pathname.indexOf("admin") !== -1 ? (
            <div className="header d-flex align-items-center">
              <h2 className="header-text mb-0">Admin Panel</h2>
            </div>
          ) : (
            <nav className="navigation">
              <ul className="navigation-list">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/store">
                    Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center">
          {props.user ? (
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <span className="text-bold">{props.user.username}</span>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <span onClick={props.userLogout} className="text-underline text-muted">Logout</span>
              </div>
            </div>
          ) : (
            <Link className="nav-link" to="/login">
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
