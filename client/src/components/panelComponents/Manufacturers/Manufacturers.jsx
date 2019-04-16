import React, { Component } from "react";
import { connect } from "react-redux";
import ManufacturersList from "../ManufacturersList/ManufacturersList";
import ManufacturerInputForm from "../ManufacturersInputForm/ManufacturerInputForm";

class Manufacturers extends Component {
  render() {
    return (
      <div className="container">
        <div className="manufacturersPanel row">
          <ManufacturersList data={this.props.manufacturers} />
          <div className="col-lg-1" />
          <ManufacturerInputForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  null
)(Manufacturers);
