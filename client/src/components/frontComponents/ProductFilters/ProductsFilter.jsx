import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import FilterGroup from "../FilterGroup/FilterGroup";
import PropTypes from 'prop-types';
import ClearIcon from "@material-ui/icons/Clear";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  filterGroup: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`
  }
}));

const ProductFilters = (props) => {
  const classes = useStyles();
  let activeFilters = [];

  const getActiveFilters = () => {
    if (props.activeFilters.length === 0) {
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

      <Typography className={classes.filterGroup} />

      <Box align={'right'}>
        <Button onClick={() => props.setFilter('all', '')}>
          <ClearIcon />
          Clear filters
        </Button>
      </Box>

    </Box>
  );
};

ProductFilters.defaultProps = {
  price_min: '100$',
  price_max: '250$',
};

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  activeFilters: PropTypes.array,
  setFilter: PropTypes.func
};

export default ProductFilters;
