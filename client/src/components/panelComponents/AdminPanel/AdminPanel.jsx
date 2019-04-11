import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PanelProducts from "../PanelProducts/PanelProducts";
import "./adminpanel.css";
import "../../../css_utilities/common.css";
import Footer from "../../commonComponents/Footer/Footer";
import MenuItems from "../MenuItems/MenuItems";
import {
  fetchPanelMenu,
  fetchPanelManufacturers
} from "../../../actions/panelActions";
import Manufacturers from "../Manufacturers/Manufacturers";

class AdminPanel extends Component {
  componentWillMount = () => {
    this.props.fetchPanelMenu();
    this.props.fetchPanelManufacturers();
  };

  render() {
    return (
      <div className="adminPanel">
        <div className="header">
          <h2 className="headerText">Admin Panel</h2>
        </div>
        <main className="panelContent">
          <nav className="panelNav col-lg-2 flex col-direction v-align">
            <ul>
              <li className="panelNavItem ">
                <Link
                  to={`${this.props.match.url}/products`}
                  className="flex v-align h-align"
                >
                  <span>Products</span>
                </Link>
              </li>
              <li className="panelNavItem">
                <Link
                  to={`${this.props.match.url}/menu`}
                  className="flex v-align h-align"
                >
                  Menu
                </Link>
              </li>
              <li className="panelNavItem">
                <Link
                  to={`${this.props.match.url}/manufacturers`}
                  className="flex v-align h-align"
                >
                  Manufacturers
                </Link>
              </li>
            </ul>
          </nav>

          <div className="panelView col-lg-10">
            <Route
              path={`${this.props.match.path}/products`}
              component={PanelProducts}
            />
            <Route
              path={`${this.props.match.path}/menu`}
              component={MenuItems}
            />
            <Route
              path={`${this.props.match.path}/manufacturers`}
              component={Manufacturers}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPanelMenu, fetchPanelManufacturers }
)(AdminPanel);
