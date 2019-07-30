import React, {Component} from 'react';
import {connect} from "react-redux";
import Store from "../../components/frontComponents/Store/Store";
import Loader from "../../components/commonComponents/Loader/Loader";

class StoreContainer extends Component {
  render() {
    return this.props.productsFetching
  ? <Loader content={'Listing devices...'}/>
  : <Store match={this.props.match} products={this.props.products} />

  }
}

const mapStateToProps = state => ({
  products: state.global.products,
  productsFetching: state.loading.productsFetching
});

export default connect(
  mapStateToProps,
  null
)(StoreContainer);