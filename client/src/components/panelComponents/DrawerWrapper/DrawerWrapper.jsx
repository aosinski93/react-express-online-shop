import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import DevicesIcon from "@material-ui/icons/Devices";
import StorageIcon from "@material-ui/icons/Storage";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles(theme => ({
  hidden: {
    width: 0
  },
  visible: {
    width: 300
  },
  icon: {
    color: "black"
  },
  link: {
    textDecoration: "none"
  }
}));



const DrawerWrapper = props => {
  const classes = useStyles();

  const handleCLick = (filter) => {
    if(filter) {
      props.setProductsFilter("")
    }
    props.toggleDrawer();
  }

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
        <ListItem button>
          <Box mr={3}>
            <DevicesIcon />
          </Box>
          <Link
            to={`${props.match.url}/products`}
            className={classes.link}
            onClick={() => handleCLick(true)}
          >
            <Typography>Products</Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Box mr={3}>
            <StorageIcon />
          </Box>
          <Link to={`${props.match.url}/menu`} className={classes.link} onClick={() => handleCLick(false)}>
            <Typography>Menu</Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Box mr={3}>
            <AccountBoxIcon />
          </Box>
          <Link
            to={`${props.match.url}/manufacturers`}
            className={classes.link}
            onClick={() => handleCLick(true)}
          >
            <Typography>Manufacturers</Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Box mr={3}>
            <GroupIcon />
          </Box>
          <Link
            to={`${props.match.url}/users`}
            className={classes.link}
            onClick={() => handleCLick(true)}
          >
            <Typography>Users</Typography>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerWrapper;
