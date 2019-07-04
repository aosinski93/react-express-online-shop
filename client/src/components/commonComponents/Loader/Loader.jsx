import React from "react";
import {Box, Grid, CircularProgress, Typography} from "@material-ui/core";

const Loader = () => {
  return (
    <Box mt={15}>
      <Grid container alignItems='center' justify='center'>
        <CircularProgress />
      </Grid>
      <Box mt={3}>
        <Typography align='center'>
          Charging batteries, hold on...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
