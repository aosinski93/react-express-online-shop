import React from 'react';
import {Grid, InputLabel, ListItem, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';

const ProdcutsSpecDetail = (props) => {
  return (
    <ListItem button>
      <Grid container alignItems='center'>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <InputLabel>
            {props.detailName}
          </InputLabel>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography align={"right"}>
            {props.value}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};

ProdcutsSpecDetail.propTypes = {
  detailName: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default ProdcutsSpecDetail;