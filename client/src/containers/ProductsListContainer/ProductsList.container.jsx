import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteProduct} from "../../actions/panelActions";
import ProductList from "../../components/panelComponents/ProductList/ProductList";
import Loader from "../../components/commonComponents/Loader/Loader";
import ErrorBoundary from "../../components/commonComponents/ErrorBoundary/ErrorBoundary";

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
    this.props.deleteProduct(e.currentTarget.dataset.id);
  };

  render() {
    return (this.props.products.length > 0 )
      ? (
        <ErrorBoundary>
          <ProductList
            products={this.props.products}
            onDelete={this.onDelete}
          />
        </ErrorBoundary>
      )
      : <Loader content={'Building products list'} />;
  }
}

const mapStateToProps = state => ({
  products: state.global.products,
});

export default connect(
  mapStateToProps,
  {deleteProduct}
)(ProductsListContainer);
