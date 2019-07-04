import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import screen from '../../resources/images/screen.svg';
import phone from '../../resources/images/phone.svg';
import Fab from "@material-ui/core/Fab";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  homeBanner: {
    height: '55vh'
  },
  fab: {
    padding: '0 40px'
  }
}));
const HomeBanner = (props) => {
  const classes = useStyles();
  return (
    <Box p={10} className={classes.homeBanner}>
      <Grid container spacing={6}>
        <Grid item lg={7} md={8} sm={8} xs={8}>
          <Box pt={6}>
            <Typography variant='h3' align='center'>Best devices, best prices</Typography>
            <Box p={5}>
              <Typography align='center'>
                High-end devices, perfect customer service and free delivery.
              </Typography>
            </Box>

            <Grid container justify='center'>
              <Link to='/store'>
                <Fab variant="extended" aria-label='enter the store' className={classes.fab}>
                  <Typography>Start</Typography>
                </Fab>
              </Link>
            </Grid>
          </Box>
        </Grid>

        <Grid item lg={5} md={4} sm={4} xs={4}>
          <Grid container>
            <Grid item lg={4}>
              <Box mt={10}>
                <img src={phone} alt="phone" className='img-responsive' />
              </Box>
            </Grid>
            <Grid item lg={8}>
              <Box>
                <img src={screen} alt="screen" className='img-responsive' />
              </Box>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default HomeBanner;