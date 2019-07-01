import React, {Component} from 'react';
import { connect } from "react-redux";
import Home from "../../components/frontComponents/Home/Home";

class HomeContainer extends Component {
    render() {
        return (
            <Home hotDeals={this.props.hotDeals}/>
        );
    }
}

const mapStateToProps = state => ({
     hotDeals: []
});

export default connect(
    mapStateToProps,
    null  
)(HomeContainer);