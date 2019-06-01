import React from "react";
import { Route, Link } from "react-router-dom";
import "./adminpanel.css";
import "../../../css_utilities/common.css";
import PanelProduct from "../PanelProduct/PanelProduct";
import Notification from "../../commonComponents/Notification/Notification";
import ManufacturersContainer from "../../../containers/ManufacturersContainer/Manufacturers.container";
import MenuItemsContainer from "../../../containers/MenuItemsContainer/MenuItems.container";
import PanelProductsContainer from "../../../containers/PanelProductsContainer/PanelProducts.container";

const AdminPanel = props => {
  return (
    <div className="adminPanel">
      <div className="header">
        <h2 className="header-text">Admin Panel</h2>
      </div>
      <main className="panelContent row">
        <nav className="nav panel-nav col-lg-2 col-md-2 col-sm-2 pt-5 justify-content-center">
          <ul className="list-group">
            <li className="panel-nav-item list-group-item box-shadow">
              <Link
                to={`${props.match.url}/products`}
                className="row justify-content-between panel-nav-link"
                onClick={() => props.setProductsFilter("")}
              >
                <div className="col-lg-12 col-md-12 col-sm-12 text-center text-bold">
                  <span>Products</span>
                </div>
              </Link>
            </li>
            <li className="panel-nav-item list-group-item box-shadow">
              <Link
                to={`${props.match.url}/menu`}
                className="row justify-content-between panel-nav-link"
              >
                <div className="col-lg-12 col-md-12 col-sm-12 text-center text-bold">
                  <span>Menu</span>
                </div>
              </Link>
            </li>
            <li className="panel-nav-item list-group-item box-shadow">
              <Link
                to={`${props.match.url}/manufacturers`}
                className="row justify-content-between panel-nav-link"
                onClick={() => props.setProductsFilter("")}
              >
                <div className="col-lg-12 col-md-12 col-sm-12 text-center text-bold">
                  <span>Manufacturers</span>
                </div>
              </Link>
            </li>
            <li className="panel-nav-item list-group-item box-shadow">
              <Link
                to={`${props.match.url}/users`}
                className="row justify-content-between panel-nav-link"
                onClick={() => props.setProductsFilter("")}
              >
                <div className="col-lg-12 col-md-12 col-sm-12 text-center text-bold">
                  <span>Users</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="notification-box">
          <Notification />
        </div>

        <div className="container">
          <div className="panel-view">
            <Route
              path={`${props.match.path}/products`}
              component={PanelProductsContainer}
            />
            <Route
              path={`${props.match.path}/menu`}
              component={MenuItemsContainer}
            />
            <Route
              path={`${props.match.path}/manufacturers`}
              component={ManufacturersContainer}
            />
            <Route path={`${props.match.path}/users`}
              render={() => <div>Users</div>}
            />
            <Route
              path={`${props.match.path}/product/:id`}
              component={PanelProduct}
            />

            
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
