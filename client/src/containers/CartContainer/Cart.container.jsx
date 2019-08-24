import React, {Component} from 'react';
import {connect} from "react-redux";
import Cart from "../../components/frontComponents/Cart/Cart";
import {notifyError} from "../../actions/notificationsActions";

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    }
  }

  calculateCartTotal = () => {
    let cartTotal = 0;
    this.props.cart.content.map(item => cartTotal += item.subtotal);

    return cartTotal;
  };

  handleNextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  };

  handlePrevStep = () => {
    if (this.state.step > 1) {
      return this.setState({
        step: this.state.step - 1
      })
    } else {
      this.props.notifyError(`Can't go back!`)
    }
  };

  render() {
    return (
      <Cart
        cart={this.props.cart}
        step={this.state.step}
        handleNextStep={this.handleNextStep}
        handlePrevStep={this.handlePrevStep}
        cartTotal={this.calculateCartTotal()}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {notifyError}
)(CartContainer);