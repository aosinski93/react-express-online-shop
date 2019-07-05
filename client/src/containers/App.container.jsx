import React, {Component} from 'react';
import {connect} from "react-redux";
import App from "../App";
import {checkConnection, fetchDummyData} from "../actions/globalActions";
import {fetchActiveProducts} from "../actions/frontActions";

class AppContainer extends Component {

    componentDidMount() {
        this.props.checkConnection();

        setTimeout(() => {
            this.props.dbError ? this.props.fetchDummyData() : this.props.fetchActiveProducts();
        }, 1000)
    }

    render() {


        return (
            <>
                <App/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    activeProducts: state.front.activeProducts,
    dummyData: state.global.dummyData,
    dbError: state.global.dbError
});

export default connect(
    mapStateToProps,
    {fetchActiveProducts, checkConnection, fetchDummyData}
)(AppContainer);