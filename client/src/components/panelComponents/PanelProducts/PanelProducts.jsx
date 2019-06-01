import React from "react";
import ProductsListContainer from "../../../containers/ProductsListContainer/ProductsList.container";
import ProductInputFormContainer from "../../../containers/ProductInputFormContainer/ProductInputForm.container";

const PanelProducts = () => {
  return (
    <div className="productsPanel row">
      <div className="productListContainer col-lg-6 col-md-6 col-sm-6">
        <ProductsListContainer />
      </div>
      <ProductInputFormContainer />
    </div>
  );
};

export default PanelProducts;
