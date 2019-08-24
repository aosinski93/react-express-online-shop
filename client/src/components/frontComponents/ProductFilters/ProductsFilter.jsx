import React from 'react';
import {Box, Button, Typography, List, ListItem} from "@material-ui/core";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";


const ProductFilters = (props) => {
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
            <Button onClick={() => props.setFilter('manufacturer', item.name)}>{item.name}</Button>
          </ListItem>
        )}
      </List>


    </Box>
  );
};

export default ProductFilters;
