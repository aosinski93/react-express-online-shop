import React, {Component} from 'react';
import {connect} from "react-redux";
import App from "../App";
import {checkConnection, fetchDummyData, fetchManufacturers, fetchProducts} from "../actions/globalActions";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary/ErrorBoundary";

class AppContainer extends Component {

  componentDidMount() {
    this.props.checkConnection();

    setTimeout(() => {
      if (this.props.dbError) {
        this.props.fetchDummyData()
      } else {
        if (this.props.manufacturers === [] || this.props.manufacturers.length === 0) {
          this.props.fetchManufacturers();
        }
        if (this.props.products === [] || this.props.products.length === 0) {
          this.props.fetchProducts();
        }
      }
    }, 1000)
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </>
    )
  }
}

const mapStateToProps = state => ({
  dummyData: state.global.dummyData,
  dbError: state.global.dbError,
  manufacturers: state.global.manufacturers,
  products: state.global.products,
});

export default connect(
  mapStateToProps,
  {fetchProducts, fetchManufacturers, checkConnection, fetchDummyData}
)(AppContainer);