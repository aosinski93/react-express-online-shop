import React, { Component } from "react";
import { connect } from "react-redux";
import Manufacturers from "../../components/panelComponents/Manufacturers/Manufacturers";

class ManufacturersContainer extends Component {
  render() {
    return <Manufacturers manufacturers={this.props.manufacturers} />;
  }
}

const mapStateToProps = state => ({
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  null
)(ManufacturersContainer);
