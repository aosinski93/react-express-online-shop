import React, {Component} from 'react';
import {connect} from "react-redux";
import App from "../App";
import {checkConnection, fetchDummyData, fetchManufacturers, fetchProducts} from "../actions/globalActions";

class AppContainer extends Component {

  componentDidMount() {
    this.props.checkConnection();

    setTimeout(() => {
      if (this.props.dbError) {
        this.props.fetchDummyData()
      } else {
        this.props.fetchManufacturers();
        this.props.fetchProducts();
      }
    }, 1000)
  }

  render() {


    return (
      <>
        <App />
      </>
    )
  }
}

const mapStateToProps = state => ({
  dummyData: state.global.dummyData,
  dbError: state.global.dbError
});

export default connect(
  mapStateToProps,
  {fetchProducts, fetchManufacturers, checkConnection, fetchDummyData}
)(AppContainer);