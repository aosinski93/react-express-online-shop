import React from 'react';
import {Box, CardActions, Grid, Typography} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import PropTypes from 'prop-types';

const CartSummary = (props) => {
  return (
    <CardActions>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Box textAlign={"center"}>
            <Typography>
              Delivery costs: $0
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box textAlign={"center"}>
            <Typography>
              Total value: ${props.cartTotal}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box textAlign={"center"}>
            <Fab variant="extended" aria-label="next step">
              Next step
            </Fab>
          </Box>
        </Grid>
      </Grid>
    </CardActions>
  );
};

CartSummary.propTypes = {
  cartTotal: PropTypes.number
};

export default CartSummary;