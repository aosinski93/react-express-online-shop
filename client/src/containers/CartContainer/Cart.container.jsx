import React, {Component} from 'react';
import {connect} from "react-redux";
import Cart from "../../components/frontComponents/Cart/Cart";
import {notifyError} from "../../actions/notificationsActions";

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: '',
      lastName: '',
      address: '',
      city: '',
      postalCode: '',
      deliveryType: {
        name: '',
        cost: 0
      },
      message: ''
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

  setDelivery = e => {
    let newDelivery = {
      name: e.target.name,
      cost: e.target.value
    };

    this.setState({
      deliveryType: newDelivery
    });
  };

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;


    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Cart
        user={this.props.user}
        cart={this.props.cart}
        step={this.state.step}
        handleNextStep={this.handleNextStep}
        handlePrevStep={this.handlePrevStep}
        cartTotal={this.calculateCartTotal()}
        deliveryType={this.state.deliveryType}
        setDelivery={this.setDelivery}
        onChange={this.onChange}
        name={this.state.name}
        lastName={this.state.lastName}
        address={this.state.address}
        city={this.state.city}
        postalCode={this.state.postalCode}
        message={this.state.message}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user.loggedUser
});

export default connect(
  mapStateToProps,
  {notifyError}
)(CartContainer);