import React from 'react';
import {Box, Button, Typography, List, ListItem} from "@material-ui/core";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  }
}));

let activeFilters = [];

const ProductFilters = (props) => {
  const classes = useStyles();

  props.filters.map(filter => {
    activeFilters[filter.type] = filter.value;
    return filter;
  });

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
        value={props.price_tmax}
        onChange={props.onChange}
        placeholder={'$100'}
      />


      <Typography>Filter by manufacturer: </Typography>

      <List>
        <ListItem>
          <Button onClick={() => props.setFilter('manufacturer', '')}>all</Button>
        </ListItem>
        {props.manufacturers.map(item =>
          <ListItem key={item._id}>
            <Button onClick={() => props.setFilter('manufacturer', item.name)}
                    className={activeFilters['manufacturer'] === item.name ? classes.active : ''}>
              {item.name}
            </Button>
          </ListItem>
        )}
      </List>


    </Box>
  );
};

export default ProductFilters;
