import React, {Component} from 'react';
import {connect} from "react-redux";
import Loader from "../components/commonComponents/Loader/Loader";
import App from "../App";
import {fetchActiveProducts } from "../actions/frontActions";

class AppContainer extends Component {

    componentWillMount = () => {
        this.props.fetchActiveProducts();
    };

    render() {
        return (
            <>
                {this.props.activeProducts.length > 0 ? <App /> : <Loader />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    activeProducts: state.front.activeProducts,
});

export default connect(
    mapStateToProps,
    {fetchActiveProducts}
)(AppContainer);