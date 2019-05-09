import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPanelProducts,
  fetchPanelManufacturers
} from "../../../actions/panelActions";
import ProductList from "../../panelComponents/ProductList/ProductList";
import ProductInputForm from "../ProductInputForm/ProductInputForm";

class PanelProducts extends Component {
  componentWillMount = () => {
    this.props.fetchPanelProducts();
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="productsPanel row">
        <div className="productListContainer col-lg-6 col-md-6 col-sm-6">
          <ProductList data={this.props.products} />
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1" />
        <ProductInputForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products
});

export default connect(
  mapStateToProps,
  { fetchPanelProducts, fetchPanelManufacturers }
)(PanelProducts);
