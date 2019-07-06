import React, {Component} from 'react';
import {connect} from "react-redux";
import Home from "../../components/frontComponents/Home/Home";
import Loader from "../../components/commonComponents/Loader/Loader";
import {fetchManufacturers} from "../../actions/globalActions";

class HomeContainer extends Component {

  componentDidMount = () => {
    if (this.props.dbError !== true) {
      this.props.fetchManufacturers();
    }
  };

  render() {
    return (
      <>
        {this.props.dbError
          ? (Object.keys(this.props.dummyData).length > 0 ?
            <Home hotDeals={this.props.dummyData.hotDeals} match={this.props.match}
                  dummyData={this.props.dummyData} /> : <Loader />)
          : (this.props.hotDeals.length > 0 ?
            <Home hotDeals={this.props.hotDeals} match={this.props.match} manufacturers={this.props.manufacturers} /> :
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