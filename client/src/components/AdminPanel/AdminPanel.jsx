import React from "react";
import { Route, Link } from "react-router-dom";
import PanelProducts from "../PanelProducts/PanelProducts";
import "./adminpanel.css";
import "../../css_utilities/common.css";
import Footer from "../Footer/Footer";
import ProductsList from "../ProductsList/ProductsList.jsx";

const MenuItems = () => {
  return <h3>Menu Items</h3>;
};

const Manufacturers = () => {
  return <h3>Manufacturers</h3>;
};

const AdminPanel = ({ match }) => {
  return (
    <div className="adminPanel">
      <div className="header">
        <h2 className="headerText">Admin Panel</h2>
      </div>

      <main className="panelContent">
        <nav className="panelNav col-lg-2 flex col-direction v-align">
          <ul>
            <li className="panelNavItem">
              <Link to={`${match.url}/products`}>Products</Link>
            </li>
            <li className="panelNavItem">
              <Link to={`${match.url}/menu`}>Menu Items</Link>
            </li>
            <li className="panelNavItem">
              <Link to={`${match.url}/manufacturers`}>Manufacturers</Link>
            </li>
          </ul>
        </nav>

        <div className="panelView col-lg-10">
          <Route path={`${match.path}/products`} component={PanelProducts} />
          <Route path={`${match.path}/menu`} component={MenuItems} />
          <Route
            path={`${match.path}/manufacturers`}
            component={Manufacturers}
          />
          <Route
            path="/admin/phones"
            render={props => <ProductsList {...props} type="phones" />}
          />
          <Route path="/admin/laptops" component={ProductsList} />
          <Route path="/admin/desktops" component={ProductsList} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
