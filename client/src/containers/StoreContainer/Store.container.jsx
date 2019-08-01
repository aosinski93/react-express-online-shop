import React, {Component} from 'react';
import {connect} from "react-redux";
import Store from "../../components/frontComponents/Store/Store";
import Loader from "../../components/commonComponents/Loader/Loader";

class StoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outputList: [],
      price: 'asc',
      name: 'asc'
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.products.length > 0) {
      this.setState({
        outputList: nextProps.products
      })
    }
  }


  compareBy = (key) => {

    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortBy = (key) => {
    key = key.toLocaleLowerCase();
    let arrayCopy = [...this.state.outputList];
    arrayCopy.sort(this.compareBy(key));

    this.setState({
      outputList: this.state[key] === 'asc' ? arrayCopy : arrayCopy.reverse(),
      [key]: this.state[key] === 'asc' ? 'desc' : 'asc'
    });
  };


  render() {
    return this.props.productsFetching
      ? <Loader content={'Listing devices...'} />
      :
      <Store
        match={this.props.match}
        products={this.state.outputList}
        sortBy={this.sortBy}
        price={this.state.price}
        name={this.state.name}
      />

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