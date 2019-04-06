import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PanelProducts from "../PanelProducts/PanelProducts";
import "./adminpanel.css";
import "../../css_utilities/common.css";
import Footer from "../Footer/Footer";
import ProductsList from "../ProductsList/ProductsList.jsx";
import MenuItems from "../MenuItems/MenuItems";

const Manufacturers = () => {
  return <h3>Manufacturers</h3>;
};

class AdminPanel extends Component {
  render() {
    return (
      <div className="adminPanel">
        <div className="header">
          <h2 className="headerText">Admin Panel</h2>
        </div>
        <main className="panelContent">
          <nav className="panelNav col-lg-2 flex col-direction v-align">
            <ul>
              <li className="panelNavItem">
                <Link to={`${this.props.match.url}/products`}>Products</Link>
              </li>
              <li className="panelNavItem">
                <Link to={`${this.props.match.url}/menu`}>Menu</Link>
              </li>
              <li className="panelNavItem">
                <Link to={`${this.props.match.url}/manufacturers`}>
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
            <Route
              path="/admin/phones"
              render={props => <ProductsList {...this.props} type="phones" />}
            />
            <Route path="/admin/laptops" component={ProductsList} />
            <Route path="/admin/desktops" component={ProductsList} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
