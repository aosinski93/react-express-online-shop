import React, {Component} from 'react';
import {connect} from "react-redux";
import Store from "../../components/frontComponents/Store/Store";
import Loader from "../../components/commonComponents/Loader/Loader";

class StoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceSorting: 'asc',
      nameSorting: 'asc'
    }
  }


  sortDevices = (data) => {
    data = data.sort(() => this.state.nameSorting === 'asc' ? -1 : 1);
    data = data.sort(() => this.state.priceSorting === 'asc' ? -1 : 1);
    return data;
  };

  changeSortDirection = (name) => {
    let sort = `${name.toLowerCase()}Sorting`;

    this.setState({
      [sort]: this.state[sort] === 'asc' ? 'desc' : 'asc'
    });

    this.sortDevices([...this.props.products])
  };

  render() {
    let outputList = this.sortDevices([...this.props.products]);
    return this.props.productsFetching
      ? <Loader content={'Listing devices...'} />
      : <Store match={this.props.match} products={outputList} changeSortDirection={this.changeSortDirection} />

  }
}

const mapStateToProps = state => ({
  products: state.global.products,
  productsFetching: state.loading.productsFetching
});

export default connect(
  mapStateToProps,
  null
)(StoreContainer);