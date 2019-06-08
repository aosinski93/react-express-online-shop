import React, { Component } from "react";
import ManufacturersInputFormContainer from "../../../containers/ManufacturersInputFormContainer/ManufacturersInputForm.container";
import ManufacturersListContainer from "../../../containers/ManufacturersListContainer/ManufacturersList.container";
import { Grid, Box } from "@material-ui/core";

class Manufacturers extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={7}>
          <ManufacturersListContainer data={this.props.manufacturers} />
        </Grid>
        <Grid item xs={4}>
          <Box pl={3}>
            <ManufacturersInputFormContainer />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Manufacturers;
