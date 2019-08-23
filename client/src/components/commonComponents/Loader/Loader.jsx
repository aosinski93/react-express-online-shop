import React from "react";
import {Box, Grid, CircularProgress, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  loaderText: {
    color: '#333'
  }
}));

const Loader = (props) => {
  const classes = useStyles();
  return (
    <Box mt={15}>
      <Grid container alignItems='center' justify='center'>
        <CircularProgress />
      </Grid>
      <Box mt={3}>
        <Typography align='center' className={classes.loaderText}>
          {props.content}
        </Typography>
      </Box>
    </Box>
  );
};

Loader.propTypes = {
  content: PropTypes.string
};

Loader.defaultProps = {
  content: 'Loading...'
};

export default Loader;
