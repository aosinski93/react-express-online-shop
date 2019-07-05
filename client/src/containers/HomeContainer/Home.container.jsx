import React, {Component} from 'react';
import {connect} from "react-redux";
import Home from "../../components/frontComponents/Home/Home";
import Loader from "../../components/commonComponents/Loader/Loader";

class HomeContainer extends Component {
    render() {
        return (
            <>
                {this.props.dbError
                    ? (Object.keys(this.props.dummyData).length > 0 ? <Home hotDeals={this.props.dummyData.hotDeals} match={this.props.match}/> : <Loader /> )
                    : (this.props.hotDeals.length > 0 ? <Home hotDeals={this.props.hotDeals} match={this.props.match}/> : <Loader />)

                }
            </>
        );
    }
}

const mapStateToProps = state => ({
    hotDeals: state.front.hotDeals,
    dbError: state.global.dbError,
    dummyData: state.global.dummyData
});

export default connect(
    mapStateToProps,
    null
)(HomeContainer);