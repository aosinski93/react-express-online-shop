import React, { Component } from "react";
import { connect } from "react-redux";
import Manufacturers from "../../components/panelComponents/Manufacturers/Manufacturers";

class ManufacturersContainer extends Component {
  render() {
    return <Manufacturers />;
  }
}

const mapStateToProps = state => ({
  manufacturers: state.global.manufacturers
});

export default connect(
  mapStateToProps,
  null
)(ManufacturersContainer);
