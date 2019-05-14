import React from "react";
import ProductsListContainer from "../../../containers/ProductsListContainer/ProductsList.container";
import ProductInputFormContainer from "../../../containers/ProductInputFormContainer/ProductInputForm.container";

const PanelProducts = props => {
  return (
    <div className="productsPanel row">
      <div className="productListContainer col-lg-6 col-md-6 col-sm-6">
        <ProductsListContainer />
      </div>
      <div className="col-lg-1 col-md-1 col-sm-1" />
      <ProductInputFormContainer />
    </div>
  );
};


export default PanelProducts;