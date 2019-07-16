import React from "react";
import { Link } from 'react-router-dom';
import { Container, Box, Grid, Typography, Button } from "@material-ui/core";

const NotFound = () => {
  return (
    <Container>
      <Box m={10}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Typography variant='h1'>
              404
          </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3'>
              Page not found
          </Typography>
          </Grid>
          <Grid item>
            <Box m={5}>
              <Typography>
                The page you are looking for might have been removed or is temporarilly unavailable
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button color="primary">
              <Link to={'/'}>Go back to homepage</Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NotFound;
