import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/panelActions";
import ProductList from "../../components/panelComponents/ProductList/ProductList";

class ProductsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.data !== []) {
      this.setState({
        loading: false
      });
    }
  };

  onDelete = e => {
    e.preventDefault();
    this.props.deleteProduct(e.target.dataset.id);
  };

  render() {
    return (
      <ProductList
        loading={this.props.loading}
        products={this.props.products}
        onDelete={this.onDelete}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products
});

export default connect(
  mapStateToProps,
  { deleteProduct }
)(ProductsListContainer);
