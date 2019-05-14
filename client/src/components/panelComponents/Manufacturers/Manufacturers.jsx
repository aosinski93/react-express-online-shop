import React, { Component } from "react";
import ManufacturersInputFormContainer from "../../../containers/ManufacturersInputFormContainer/ManufacturersInputForm.container";
import ManufacturersListContainer from "../../../containers/ManufacturersListContainer/ManufacturersList.container";

class Manufacturers extends Component {
  render() {
    return (
      <div className="container">
        <div className="manufacturersPanel row">
          <ManufacturersListContainer data={this.props.manufacturers} />
          <div className="col-lg-1 col-md-1 col-sm-1" />
          <ManufacturersInputFormContainer />
        </div>
      </div>
    );
  }
}

export default Manufacturers;
