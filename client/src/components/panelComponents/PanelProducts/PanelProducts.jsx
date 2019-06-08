import React from "react";
import ProductsListContainer from "../../../containers/ProductsListContainer/ProductsList.container";
import ProductInputFormContainer from "../../../containers/ProductInputFormContainer/ProductInputForm.container";
import { Grid } from "@material-ui/core";

const PanelProducts = () => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <ProductsListContainer />
      </Grid>
      <Grid item xs={5}>
        <ProductInputFormContainer />
      </Grid>
    </Grid>
  );
};

export default PanelProducts;
