import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
} from "../../actions/globalActions";
import PanelProducts from "../../components/panelComponents/PanelProducts/PanelProducts";

class PanelProductsContainer extends Component {
  componentWillMount = () => {
    if (this.props.productsFilter === "") {
      this.props.fetchProducts();
    }
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <PanelProducts />
    );
  }
}

const mapStateToProps = state => ({
  products: state.global.products
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(PanelProductsContainer);
