import React from "react";
import { Link } from "react-router-dom";

const PanelProducts = ({ match }) => {
  return (
    <div className="productsPanel">
      <nav className="panelSubNav">
        <ul className="categoriesList flex">
          <li className="productCategoryItem">
            <Link to={`/admin/phones`}>Phones</Link>
          </li>
          <li className="productCategoryItem">
            <Link to={`/admin/laptops`}>Laptops</Link>
          </li>
          <li className="productCategoryItem">
            <Link to={`/admin/desktops`}>Desktops</Link>
          </li>
        </ul>
      </nav>

      <div className="content" />
    </div>
  );
};

export default PanelProducts;
