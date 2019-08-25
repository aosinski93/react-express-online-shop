import React from 'react';
import {Box, Button} from "@material-ui/core";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import FilterGroup from "../FilterGroup/FilterGroup";
import PropTypes from 'prop-types';

const ProductFilters = (props) => {

  let activeFilters = [];

  const getActiveFilters = () => {
    if(props.activeFilters.length === 0) {
      return activeFilters;
    }
    props.activeFilters.map(filter => {
      activeFilters[filter.type] = filter.value;
      return filter;
    });
  };

  getActiveFilters();
  return (
    <Box mt={5} p={2}>
      <FormGroup
        name={'price_min'}
        type={'number'}
        labelText={'Minimum price'}
        value={props.price_min}
        onChange={props.onChange}
        placeholder={'$100'}
      />

      <FormGroup
        name={'price_max'}
        type={'number'}
        labelText={'Maximum price'}
        value={props.price_max}
        onChange={props.onChange}
        placeholder={'$100'}
      />

      <Button onClick={() => props.setFilter('all', '')}>Show all</Button>
      {
        Object.keys(props.filters).map(key => {
          return (
            <FilterGroup
              key={key}
              filterName={key}
              filterValues={props.filters[key]}
              activeFilters={activeFilters}
              setFilter={props.setFilter}
            />
          )
        })
      }

    </Box>
  );
};

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  price_min: PropTypes.number,
  price_max: PropTypes.number,
  onChange: PropTypes.func,
  activeFilters: PropTypes.array,
  setFilter: PropTypes.func
};

export default ProductFilters;
