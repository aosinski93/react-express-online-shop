import React from 'react';
import {Box, CardActions, Grid, StepButton, Typography} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const CartSummary = (props) => {
  return (
    <CardActions>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Box textAlign={"center"}>
            <StepButton icon={<ArrowBackIcon />} onClick={props.handlePrevStep} />
          </Box>
        </Grid>
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
            <StepButton icon={<ArrowForwardIcon />} onClick={props.handleNextStep} />
          </Box>
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default CartSummary;