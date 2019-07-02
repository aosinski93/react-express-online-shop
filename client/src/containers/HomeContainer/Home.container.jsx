import React, {Component} from 'react';
import {connect} from "react-redux";
import Home from "../../components/frontComponents/Home/Home";
import Loader from "../../components/commonComponents/Loader/Loader";

class HomeContainer extends Component {
    render() {
        return (
            <>
                {this.props.hotDeals.length > 0 ? <Home hotDeals={this.props.hotDeals} match={this.props.match}/> : <Loader />}
            </>

        );
    }
}

const mapStateToProps = state => ({
    hotDeals: state.front.hotDeals
});

export default connect(
    mapStateToProps,
    null
)(HomeContainer);