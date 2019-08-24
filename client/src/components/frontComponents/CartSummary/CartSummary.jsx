import React from 'react';
import {Box, CardActions, Grid, StepButton, Typography} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  cartSummary: {
    padding: theme.spacing(3)
  }
}));

const CartSummary = (props) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.cartSummary}>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Box textAlign={"center"}>
            <StepButton icon={<ArrowBackIcon />} onClick={props.handlePrevStep} title={'Go back'}/>
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
            <StepButton icon={<ArrowForwardIcon />} onClick={props.handleNextStep} title={'Move to next step'}/>
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