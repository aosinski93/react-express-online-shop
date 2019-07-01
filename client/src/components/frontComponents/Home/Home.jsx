import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import DevicesIcon from "@material-ui/icons/Devices";
import DeviceListItem from "../DeviceListItem/DeviceListItem";

const Home = props => {
  console.log(props);
    return (
      <Box mt={4}>
        <Container>
          <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Typography variant='h3' align='center'>DigiStore</Typography>
              <Typography variant='h1' align='center'>
                <DevicesIcon fontSize='large'/>
              </Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12}>
              <Box m={4}>
                <Typography variant='h4' align='center'>Hot deals</Typography>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <DeviceListItem device={{name: 'test'}} />
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <DeviceListItem device={{name: 'test2'}} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
}

export default Home;
