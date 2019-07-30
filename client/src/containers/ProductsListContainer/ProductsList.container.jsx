import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteProduct} from "../../actions/panelActions";
import ProductList from "../../components/panelComponents/ProductList/ProductList";
import Loader from "../../components/commonComponents/Loader/Loader";
import ErrorBoundary from "../../components/commonComponents/ErrorBoundary/ErrorBoundary";

class ProductsListContainer extends Component {
  constructor(props) {
    super(props);
  }

  onDelete = e => {
    e.preventDefault();
    this.props.deleteProduct(e.currentTarget.dataset.id);
  };

  render() {
    return this.props.productsFetching
      ? <Loader content={'Building products list'} />
      : (
        <ErrorBoundary>
          <ProductList
            products={this.props.products}
            onDelete={this.onDelete}
          />
        </ErrorBoundary>
      );
  }
}

const mapStateToProps = state => ({
  products: state.global.products,
  productsFetching: state.loading.productsFetching
});

export default connect(
  mapStateToProps,
  {deleteProduct}
)(ProductsListContainer);
