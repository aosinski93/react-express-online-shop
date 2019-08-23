import React from "react";
import {Link} from "react-router-dom";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import {Box, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import ComputerIcon from "@material-ui/icons/Computer";
import DevicesIcon from "@material-ui/icons/Devices";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  link: {
    textDecoration: 'none'
  },
  singleProduct: {
    marginTop: '20px'
  }
}));

const selectIcon = (category) => {
  switch (category) {
    case 'phones': {
      return <SmartphoneIcon />
    }
    case 'computers': {
      return <ComputerIcon />
    }
    default: {
      return <DevicesIcon />
    }
  }
};

const PanelProductListItem = props => {
  const classes = useStyles();
  return (
    <Box id={props.item._id} className={classes.singleProduct}>
      <Grid container display="flex" alignItems="center">
        <Grid item xs={10}>
          <Link to={`product/${props.item.slug}`} className={classes.link}>
            <Grid container display="flex" alignItems="center">
              <Grid align='center' item xs={3}>
                {props.item.category.name ? selectIcon(props.item.category.name.toLowerCase()) : selectIcon()}
              </Grid>
              <Grid item xs={3}>
                <Typography align='center'>{props.item.name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align='center'>
                  {props.item.manufacturer && props.item.manufacturer.name}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align='center'>{props.item.operating_system}</Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <DeleteButton
            className="btn btn-danger"
            onClick={props.onDelete}
            title={`Delete ${props.item.name}`}
            dataId={props.item._id}
          />
        </div>
      </Grid>
    </Box>
  );
};

PanelProductListItem.propTypes = {
  item: PropTypes.object,
  _id: PropTypes.string,
  category: PropTypes.object,
  manufacturer: PropTypes.object,
  name: PropTypes.string,
  onDelete: PropTypes.func
};

export default PanelProductListItem;
