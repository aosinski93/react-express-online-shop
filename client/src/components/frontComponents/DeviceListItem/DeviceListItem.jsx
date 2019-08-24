import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  listItem: {
    margin: theme.spacing(2),
    boxShadow: `0px 5px 5px -3px ${theme.palette.primary.accent}, 0px 8px 10px 1px ${theme.palette.primary.accent}, 0px 3px 14px 2px ${theme.palette.primary.accent}`
  },
  listItemImageWrapper: {
    margin: '0 auto'
  },
  listItemPrice: {
    color: '#333',
    fontSize: '1.5vw'
  },
  listItemName: {
    fontSize: '1.5vw'
  },
  shortDescription: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}));

const DeviceListItem = (props) => {
  const classes = useStyles();

  return (
    <Link to={`/product/${props.device.slug}`}>
      <Card className={classes.listItem}>
        <CardContent>
          <Grid container>
            <Grid item xs={3} align='center'>
              <Box className={classes.listItemImageWrapper}>
                <img src={`/product_images/${props.device.slug}.png`} alt={props.device.name} className='img-responsive'
                     style={{maxHeight: props.maxHeight}} />
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Grid container style={{'height': '100%'}}>
                <Grid item xs={12}>
                  <Typography className={classes.listItemName}>
                    {props.device.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.shortDescription}>
                    {props.device.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} align='right'>
                  <Typography variant='h3' className={classes.listItemPrice}>
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

DeviceListItem.propTypes = {
  device: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};

export default DeviceListItem;