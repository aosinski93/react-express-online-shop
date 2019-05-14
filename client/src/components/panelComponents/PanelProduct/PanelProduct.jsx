import React, { Component } from "react";
import { connect } from "react-redux";

class PanelProduct extends Component {
  constructor(match) {
    super();

    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props.product);
  };

  render() {
    return <h1>Product</h1>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.panel.products.filter(
    item => item._id !== ownProps.match.params.id
  )


//   zleeee
});
export default connect(
  mapStateToProps,
  null
)(PanelProduct);
