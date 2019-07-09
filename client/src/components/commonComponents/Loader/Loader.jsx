import React from "react";
import {Box, Grid, CircularProgress, Typography} from "@material-ui/core";

const Loader = (props) => {
  return (
    <Box mt={15}>
      <Grid container alignItems='center' justify='center'>
        <CircularProgress />
      </Grid>
      <Box mt={3}>
        <Typography align='center'>
            {props.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
