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
        products={this.props.products.filter(item => item.manufacturer.name !== this.props.chosenManufacturer)}
        onDelete={this.onDelete}
        filter={this.props.chosenManufacturer}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products,
  chosenManufacturer: state.panel.chosenManufacturer
});

export default connect(
  mapStateToProps,
  { deleteProduct }
)(ProductsListContainer);
