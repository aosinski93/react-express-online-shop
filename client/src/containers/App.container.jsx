import React, {Component} from 'react';
import {connect} from "react-redux";
import Loader from "../components/commonComponents/Loader/Loader";
import App from "../App";
import { checkConnection } from "../actions/globalActions";
import {fetchActiveProducts } from "../actions/frontActions";

class AppContainer extends Component {
    componentWillMount = () => {
        this.props.checkConnection();
        this.props.fetchActiveProducts();
    };

    fetchDummyData = () => {
        console.log('fetching dummy data...');
    };

    render() {
        return (
            <>
                {this.props.activeProducts.length > 0
                  ? <App />
                : <>
                      <Loader />
                      {this.props.dbError === true ? this.fetchDummyData() : null}
                  </>}
            </>
        )
    }
}

const mapStateToProps = state => ({
    dbError: state.global.dbError,
    activeProducts: state.front.activeProducts,
});

export default connect(
    mapStateToProps,
    {fetchActiveProducts, checkConnection}
)(AppContainer);