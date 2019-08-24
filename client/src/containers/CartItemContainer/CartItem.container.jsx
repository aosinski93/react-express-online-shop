import React, {Component} from 'react';
import {connect} from "react-redux";
import {removeDeviceFromCart, increaseCartQty, decreaseCartQty} from "../../actions/cartActions";
import CartItem from "../../components/frontComponents/CartItem/CartItem";

class CartItemContainer extends Component {

  handleRemove = (e) => {
    e.preventDefault();
    this.props.removeDeviceFromCart(e.currentTarget.dataset.id)
  };

  handleIncreaseQuantity = (e) => {
    e.preventDefault();
    this.props.increaseCartQty(e.currentTarget.dataset.id)
  };

  handleDecreaseQuantity = (e) => {
    e.preventDefault();
    this.props.decreaseCartQty(e.currentTarget.dataset.id)
  };

  render() {
    return (
      <CartItem
        item={this.props.item}
        handleRemove={this.handleRemove}
        increaseQuantity={this.handleIncreaseQuantity}
        decreaseQuantity={this.handleDecreaseQuantity}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  item: state.cart.content.find(item => item._id === ownProps.itemId)
});

export default connect(
  mapStateToProps,
  {removeDeviceFromCart, increaseCartQty, decreaseCartQty}
)(CartItemContainer);