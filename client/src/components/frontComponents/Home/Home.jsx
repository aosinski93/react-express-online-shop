import React from "react";
import {Container, Grid, Box, Typography} from "@material-ui/core";
import DeviceListItem from "../DeviceListItem/DeviceListItem";
import HomeBanner from "../HomeBanner/HomeBanner";
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <Container>
      <Grid container>
        <HomeBanner />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box m={4}>
            {props.hotDeals.length === 2 && (
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant='h4' align='center'>Hot deals</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <DeviceListItem match={props.match} device={props.hotDeals[0]} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <DeviceListItem match={props.match} device={props.hotDeals[1]} />
                </Grid>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

Home.propTypes = {
  hotDeals: PropTypes.array
};

export default Home;
