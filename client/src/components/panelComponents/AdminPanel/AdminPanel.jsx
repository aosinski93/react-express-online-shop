import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PanelProducts from "../PanelProducts/PanelProducts";
import "./adminpanel.css";
import "../../../css_utilities/common.css";
import MenuItems from "../MenuItems/MenuItems";
import {
  fetchPanelMenu,
  fetchPanelManufacturers,
  fetchPanelProducts
} from "../../../actions/panelActions";
import Manufacturers from "../Manufacturers/Manufacturers";
import Notification from "../../commonComponents/Notification/Notification";

class AdminPanel extends Component {
  componentWillMount = () => {
    this.props.fetchPanelMenu();
    this.props.fetchPanelManufacturers();
    this.props.fetchPanelProducts();
  };

  render() {
    return (
      <div className="adminPanel">
        <div className="header">
          <h2 className="header-text">Admin Panel</h2>
        </div>
        <main className="panelContent row">
          <nav className="nav panel-nav col-lg-2 col-md-2 col-sm-2 justify-content-center">
            <ul className="list-group">
              <li className="panel-nav-item list-group-item box-shadow">
                <Link
                  to={`${this.props.match.url}/products`}
                  className="row justify-content-between panel-nav-link"
                >
                  <div className="col-lg-10 col-md-10 col-sm-10">Products</div>
                  <div className="col-lg-2 col-md-2 col-sm-2 badge badge-primary pt-1 badge-pill">
                    {this.props.products.length}
                  </div>
                </Link>
              </li>
              <li className="panel-nav-item list-group-item box-shadow">
                <Link
                  to={`${this.props.match.url}/menu`}
                  className="row justify-content-between panel-nav-link"
                >
                  <div className="col-lg-10 col-md-10 col-sm-10">Menu</div>
                  <div className="col-lg-2 col-md-2 col-sm-2 badge badge-primary pt-1 badge-pill">
                    {this.props.menu.length}
                  </div>
                </Link>
              </li>
              <li className="panel-nav-item list-group-item box-shadow">
                <Link
                  to={`${this.props.match.url}/manufacturers`}
                  className="row justify-content-between panel-nav-link"
                >
                  <div className="col-lg-10 col-md-10 col-sm-10">Manufacturers</div>
                  <div className="col-lg-2 col-md-2 col-sm-2 badge badge-primary pt-1 badge-pill">
                    {this.props.manufacturers.length}
                  </div>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="notification-box">
            <Notification />
          </div>

          <div className="panel-view col-lg-10 col-md-10 col-sm-10 pt-4">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products,
  menu: state.panel.menu,
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  { fetchPanelMenu, fetchPanelManufacturers, fetchPanelProducts }
)(AdminPanel);
