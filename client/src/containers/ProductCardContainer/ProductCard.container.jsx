import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductCard from '../../components/commonComponents/ProductCard/ProductCard';
import Loader from '../../components/commonComponents/Loader/Loader';
import {objIsEmpty} from "../../helpers";
import {uploadImage} from "../../actions/panelActions";

class ProductCardContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.product !== nextProps.product || this.props.dummyProduct !== nextProps.dummyProduct);
  }


  render() {
    return (
      <>
        {(this.props.product === undefined && objIsEmpty(this.props.dummyProduct)) ?
          <Loader content={'Building product card..'} /> :
          <>
            {this.props.product !== undefined || !objIsEmpty(this.props.dummyProduct) ?
              <ProductCard data={this.props.product !== undefined ? this.props.product : this.props.dummyProduct}
                           isInAdmin={this.props.match.path.indexOf('admin') !== -1}
                           uploadImage={this.props.uploadImage}
              /> : 'error'}
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.global.products.find(
    item => item.slug === ownProps.match.params.slug
  ),
  dummyProduct: !objIsEmpty(state.global.dummyData) ? state.global.dummyData.products.find(
    item => item.slug === ownProps.match.params.slug
  ) : {}
});

export default connect(
  mapStateToProps,
  {uploadImage}
)(ProductCardContainer);