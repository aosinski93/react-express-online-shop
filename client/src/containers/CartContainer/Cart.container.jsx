import React, {Component} from 'react';
import {connect} from "react-redux";

class CartContainer extends Component {
  render() {
    return (
      <div>CartContainer</div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartContent: state.cart.content
});

export default connect(
  mapStateToProps,
  null
)(CartContainer);