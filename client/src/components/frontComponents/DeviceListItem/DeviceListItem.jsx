import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import image from '../../../resources/product_images/galaxy-s5.png';
import Box from "@material-ui/core/Box";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  listItem: {
    margin: theme.spacing(2)
  },
  listItemImageWrapper: {
    margin: '0 auto'
  },
  listItemPrice: {
    color: theme.palette.secondary.light
  },
  listItemName: {
    fontSize: '16px'
  },
}));

const DeviceListItem = (props) => {
  const classes = useStyles();

  return (
    <Link to={`/product/${props.device.slug}`}>
      <Card raised className={classes.listItem}>
        <CardContent>
          <Grid container>
            <Grid item xs={4} align='center'>
              <Box className={classes.listItemImageWrapper}>
                <img src={image} alt={props.device.name} className='img-responsive' />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Grid container alignItems="stretch">
                <Grid item xs={12}>
                  <Typography className={classes.listItemName}>
                    {props.device.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    {props.device.operating_system || 'unknown'}
                  </Typography>
                </Grid>
                <Grid item xs={12} align='right'>
                  <Typography className={classes.listItemPrice}>
                    $ {props.device.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DeviceListItem;