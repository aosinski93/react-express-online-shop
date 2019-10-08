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
      filters: [],
      price_min: '',
      price_max: '',
      isBeingFiltered: false
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
    this.setState({
      isBeingFiltered: true
    });
    let newFilter = {
      type: filterType,
      value: filterValue
    };

    let newFilters = [...this.state.filters];
    if (filterType === 'all') {
      newFilters = [];
    } else if (newFilters.length === 0) {
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
      this.applyFilters);
  };

  applyFilters = () => {
    let newOutputList = [...this.props.products];


    if (this.state.price_max !== '' || this.state.price_min !== '') {
      newOutputList = newOutputList.filter(listItem => {
        if (this.state.price_max !== '' && this.state.price_min === '') {
          return listItem.price <= this.state.price_max;
        } else if (this.state.price_min !== '' && this.state.price_max === '') {
          return listItem.price <= this.state.price_min;
        } else {
          return listItem.price <= this.state.price_min && listItem.price <= this.state.price_max;
        }
      });
    }
    if (this.state.filters.length === 0) {
      return this.setState({
        outputList: newOutputList
      });
    } else {
      newOutputList = this.state.filters.map(filter => {
        if (filter.value === '') {
          return newOutputList;
        }
        if (filter.type === 'manufacturer') {
          newOutputList = newOutputList.filter(listItem => listItem[filter.type].name === filter.value)
        } else {
          newOutputList = newOutputList.filter(listItem => {
            return listItem[filter.type] === filter.value
          })
        }

        this.setState({
          outputList: newOutputList,
          isBeingFiltered: false
        });

        return newOutputList;
      });
    }
  };


  getFilters = () => {
    let featureFilters = {
      'manufacturer': [],
      'ram': [],
      'operating_system': []
    };

    this.props.products.map(product => {
      Object.keys(featureFilters).forEach(key => {
        if (key === 'manufacturer') {
          if (featureFilters[key].indexOf(product[key].name) === -1) {
            return featureFilters[key].push(product[key].name);
          }
        } else {
          if (featureFilters[key].indexOf(product[key]) === -1) {
            return featureFilters[key].push(product[key]);
          }
        }
      });
      return product;
    });

    return featureFilters;
  };

  onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
        [name]: value
      },
      this.applyFilters);
  };

  render() {
    this.getFilters();
    return this.props.productsFetching
      ? <Loader content={'Listing devices...'} />
      :
      <Store
        match={this.props.match}
        products={this.state.outputList}
        sortBy={this.sortBy}
        price={this.state.price}
        name={this.state.name}
        setFilter={this.setFilter}
        filters={this.getFilters()}
        activeFilters={this.state.filters}
        price_min={this.state.price_min}
        price_max={this.state.price_max}
        onChange={this.onChange}
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