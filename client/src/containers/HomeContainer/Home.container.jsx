import React, {Component} from 'react';
import {connect} from "react-redux";
import Home from "../../components/frontComponents/Home/Home";
import Loader from "../../components/commonComponents/Loader/Loader";
import {fetchManufacturers} from "../../actions/globalActions";
import { objIsEmpty } from "../../helpers";

class HomeContainer extends Component {
  render() {
    return (
      <>
        {this.props.dbError
          ? (!objIsEmpty(this.props.dummyData) ?
            <Home hotDeals={this.props.dummyData.hotDeals} match={this.props.match}
                  dummyData={this.props.dummyData} /> : <Loader />)
          : (this.props.manufacturers.length > 0 ?
            <Home hotDeals={this.props.hotDeals && this.props.hotDeals} match={this.props.match} manufacturers={this.props.manufacturers} /> :
            <Loader />)

        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  hotDeals: state.global.hotDeals,
  manufacturers: state.global.manufacturers,
  dbError: state.global.dbError,
  dummyData: state.global.dummyData

});

export default connect(
  mapStateToProps,
  {fetchManufacturers}
)(HomeContainer);