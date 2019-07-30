import React from "react";
import {Container, Grid, Box, Typography, Card, CardContent, makeStyles} from "@material-ui/core";
import DeviceListItem from "../DeviceListItem/DeviceListItem";
import HomeBanner from "../HomeBanner/HomeBanner";

const useStyles = makeStyles(theme => ({
  manufacturerWrapper: {
    margin: theme.spacing(2)
  },
  logoHeight: {
    maxHeight: '100px'
  }
}));


const Home = props => {
  const { manufacturers } = props;
  const classes = useStyles();
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

      {manufacturers.length > 0 && (
        <Box mt={4}>
          <Grid container justify='center'>
            <Typography variant='h4' align='center'>Our top manufacturers:</Typography>
          </Grid>

          <Box mt={3}>
            <Grid container>
              {manufacturers.slice(0, 3).map(manufacturer => {
                return (
                  <Grid key={`manufacturer_${manufacturer.name}}`} item xs={12} sm={4} md={4} lg={4}>
                    <Card raised={true} className={classes.manufacturerWrapper}>
                      <CardContent>
                        <Grid container alignItems='center'>
                          <Grid item lg={4} md={4} sm={4} xs={12}>
                            <img
                              src={manufacturer.logoSrc}
                              alt={manufacturer.name} className={`img-responsive ${classes.logoHeight}`} />
                          </Grid>
                          <Grid item lg={8} md={8} sm={8} xs={12}>
                            <Typography variant={"h4"} align='center'>
                              {manufacturer.name}
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
      )}

    </Container>
  );
};

export default Home;
