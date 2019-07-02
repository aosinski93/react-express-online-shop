import React from "react";
import {Container, Grid, Box, Typography, Card, CardContent, makeStyles} from "@material-ui/core";
import DevicesIcon from "@material-ui/icons/Devices";
import DeviceListItem from "../DeviceListItem/DeviceListItem";

const manufacturers = ['Xiaomi', 'Sony', 'Apple'];

const useStyles = makeStyles(theme => ({
  manufacturerWrapper: {
    margin: theme.spacing(2)
  }
}));

const Home = props => {
  const classes = useStyles();
  return (
    <Box mt={4}>
      <Container>
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant='h3' align='center'>DigiStore</Typography>
            <Typography variant='h1' align='center'>
              <DevicesIcon fontSize='large' />
            </Typography>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Box m={4}>
              <Typography variant='h4' align='center'>Hot deals</Typography>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <DeviceListItem match={props.match} device={props.hotDeals[0]} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <DeviceListItem match={props.match} device={props.hotDeals[1]} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Grid container justify='center'>
            <Typography variant='h3' align='center'>Best devices, best prices</Typography>
          </Grid>
          <Grid container justify='center'>
            <Typography variant='h6' align='center'>Our top manufacturers:</Typography>
          </Grid>

          <Box mt={3}>
            <Grid container>
              {manufacturers.map(manufacturer => {
                return (
                  <Grid key={manufacturers.indexOf(manufacturer)} item xs={12} sm={4} md={4} lg={4}>
                    <Card raised={true} className={classes.manufacturerWrapper}>
                      <CardContent>
                        <Grid container alignItems='center'>
                          <Grid item lg={4} md={4} sm={4} xs={12}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/240px-Xiaomi_logo.svg.png" alt={manufacturer} className='img-responsive' />
                          </Grid>
                          <Grid item lg={8} md={8} sm={8} xs={12} >
                            <Typography align='center'>
                              {manufacturer}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
