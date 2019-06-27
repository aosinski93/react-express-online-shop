import React from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Box mt={15}>
      <Grid container alignItems='center' justify='center'>
      <CircularProgress/>
    </Grid>
    </Box>
  );
};

export default Loader;
