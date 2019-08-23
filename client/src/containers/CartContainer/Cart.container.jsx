import React, {Component} from 'react';
import {connect} from "react-redux";
import Cart from "../../components/frontComponents/Cart/Cart";

class CartContainer extends Component {

  calculateCartTotal = () => {
    let cartTotal = 0;
    this.props.cart.content.map(item => cartTotal += item.subtotal);

    return cartTotal;
  };

  render() {
    return (
      <Cart cart={this.props.cart} cartTotal={this.calculateCartTotal()} />
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(CartContainer);