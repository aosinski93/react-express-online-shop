import React, {Component} from 'react';
import {connect} from "react-redux";
import {removeDeviceFromCart} from "../../actions/cartActions";
import CartItem from "../../components/frontComponents/CartItem/CartItem";

class CartItemContainer extends Component {

  handleRemove = (e) => {
    e.preventDefault();
    this.props.removeDeviceFromCart(e.currentTarget.dataset.id)
  };

  render() {
    return (
      <CartItem item={this.props.item} handleRemove={this.handleRemove} />
    );
  }
};

export default connect(
  null,
  {removeDeviceFromCart}
)(CartItemContainer);