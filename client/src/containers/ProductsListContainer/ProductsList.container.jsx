import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteProduct} from "../../actions/panelActions";
import ProductList from "../../components/panelComponents/ProductList/ProductList";
import Loader from "../../components/commonComponents/Loader/Loader";

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
    return (this.props.products.length > 0 || Object.keys(this.props.dummyData).length > 0)
      ? (<ProductList
        loading={this.props.loading}
        products={this.props.products.length > 0 ? this.props.products : this.props.dummyData.products}
        onDelete={this.onDelete}

      />)
      : <Loader />;
  }
}

const mapStateToProps = state => ({
  products: state.global.products,
  filteredProducts: state.panel.filteredProducts,
  dummyData: state.global.dummyData
});

export default connect(
  mapStateToProps,
  {deleteProduct}
)(ProductsListContainer);
