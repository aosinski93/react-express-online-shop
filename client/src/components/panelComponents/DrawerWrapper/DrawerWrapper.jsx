import React from "react";
import {Link} from "react-router-dom";
import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import DevicesIcon from "@material-ui/icons/Devices";
import StorageIcon from "@material-ui/icons/Storage";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import GroupIcon from "@material-ui/icons/Group";
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  hidden: {
    width: 0,
  },
  visible: {
    width: '300px',
  },
  icon: {
    color: "black"
  },
  link: {
    textDecoration: "none",
    color: '#000',
    display: 'block'
  }
}));


const DrawerWrapper = props => {
  const classes = useStyles();
  const handleClick = (filter) => {
    props.toggleDrawer();
  };

  return (
    <Drawer
      open={props.isVisible}
      className={props.isVisible ? classes.hidden : classes.visible}
    >
      <Box p={5} pt={2}>
        <IconButton onClick={props.toggleDrawer}>
          <MenuIcon className={classes.icon} />
        </IconButton>
      </Box>
      <List component="nav" aria-label="Panel navigation">

        <a href="/" className={classes.link}>
          <ListItem button>
            <Box mr={3}>
              <HomeIcon />
            </Box>
            <Typography>Home (Front)</Typography>
          </ListItem>
        </a>

        <Link
          to={`${props.match.url}`}
          className={classes.link}
          onClick={() => handleClick()}
        >
          <ListItem button>
            <Box mr={3}>
              <DashboardIcon />
            </Box>
            <Typography>Dashboard</Typography>
          </ListItem>
        </Link>

        <Link
          to={`${props.match.url}/products`}
          className={classes.link}
          onClick={() => handleClick()}
        >
          <ListItem button>
            <Box mr={3}>
              <DevicesIcon />
            </Box>
            <Typography>Products</Typography>
          </ListItem>
        </Link>
        <Link to={`${props.match.url}/menu`} className={classes.link} onClick={() => handleClick()}>
          <ListItem button>
            <Box mr={3}>
              <StorageIcon />
            </Box>

            <Typography>Menu</Typography>

          </ListItem>
        </Link>

        <Link
          to={`${props.match.url}/manufacturers`}
          className={classes.link}
          onClick={() => handleClick()}
        >
          <ListItem button>
            <Box mr={3}>
              <AccountBoxIcon />
            </Box>
            <Typography>Manufacturers</Typography>
          </ListItem>
        </Link>

        <Link
          to={`${props.match.url}/users`}
          className={classes.link}
          onClick={() => handleClick()}
        >
          <ListItem button>
            <Box mr={3}>
              <GroupIcon />
            </Box>
            <Typography>Users</Typography>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

DrawerWrapper.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

export default DrawerWrapper;
