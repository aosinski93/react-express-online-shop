import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductCard from '../../components/commonComponents/ProductCard/ProductCard';
import Loader from '../../components/commonComponents/Loader/Loader';
import {uploadImage} from "../../actions/panelActions";
import {addDeviceToCart} from '../../actions/cartActions';
import {addDeviceToFavourites} from '../../actions/favouritesActions';

class ProductCardContainer extends Component {

  handleAddToCart = (e, _id, qty) => {
    this.props.addDeviceToCart(_id, qty);
  };
  handleAddToFavourites = (_id) => {
    this.props.addDeviceToFavourites(_id);
  };

  render() {
    return (
      <>
        {(this.props.product !== undefined)
          ? <ProductCard data={this.props.product}
                         isInAdmin={this.props.match.path.indexOf('admin') !== -1}
                         uploadImage={this.props.uploadImage}
                         addDeviceToCart={this.handleAddToCart}
                         addDeviceToFavourites={this.handleAddToFavourites}
                         deviceAdding={this.props.deviceAdding}
          />

          : <Loader content={'Building product card..'} />

        }
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.global.products.find(
    item => item.slug === ownProps.match.params.slug
  ),
  deviceAdding: state.loading.deviceAdding
});

export default connect(
  mapStateToProps,
  {uploadImage, addDeviceToCart, addDeviceToFavourites}
)(ProductCardContainer);