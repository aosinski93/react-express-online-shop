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
      name: 'asc',
      filters: []
    }
  }

  componentDidMount() {
    this.setState({
      outputList: this.props.products
    })
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

  setFilter = (filterType, filterValue) => {
    let newFilter = {
      type: filterType,
      value: filterValue
    };

    let newFilters = [...this.state.filters];
    if (newFilters.length === 0) {
      newFilters.push(newFilter);
    } else {
      newFilters.map(filter => {
        if (newFilter.type === filter.type) {
          return filter.value = newFilter.value
        } else {
          return newFilters.push(newFilter);
        }
      });
    }


    this.setState({
        filters: newFilters
      },
      this.applyFilter);
  };

  applyFilter = () => {
    let newOutputList = [...this.props.products];

    newOutputList = this.state.filters.map(filter => {
      if (filter.value === '') {
        return newOutputList;
      }
      return newOutputList.filter(listItem => listItem[filter.type].name === filter.value)
    });

    this.setState({
      outputList: newOutputList[0]
    })
  };

  render() {
    return this.props.productsFetching
      ? <Loader content={'Listing devices...'} />
      :
      <Store
        match={this.props.match}
        products={this.state.outputList}
        manufacturers={this.props.manufacturers}
        sortBy={this.sortBy}
        price={this.state.price}
        name={this.state.name}
        setFilter={this.setFilter}
        filters={this.state.filters}
      />

  }
}

const mapStateToProps = state => ({
  products: state.global.products,
  manufacturers: state.global.manufacturers,
  productsFetching: state.loading.productsFetching
});

export default connect(
  mapStateToProps,
  null
)(StoreContainer);