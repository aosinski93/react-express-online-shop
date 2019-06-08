import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    minHeight: 45,
    backgroundColor: "#0099DD"
  },
  link: {
    margin: theme.spacing(1),
    color: "white",
    textDecoration: "none"
  },
  icon: {
    color: "white"
  }
}));

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Grid container>
        <Grid item xs={6}>
          <Toolbar>
            {window.location.pathname.indexOf("admin") !== -1 ? (
              <IconButton onClick={props.toggleDrawer}>
                <MenuIcon className={classes.icon} />
              </IconButton>
            ) : (
              <Fragment>
                <Typography>
                  <Button>
                    <Link className={classes.link} to="/">
                      Home
                    </Link>
                  </Button>
                </Typography>
                <Typography>
                  <Button>
                    <Link className={classes.link} to="/store">
                      Store
                    </Link>
                  </Button>
                </Typography>
                <Typography>
                  <Button>
                    <Link className={classes.link} to="/contact">
                      Contact
                    </Link>
                  </Button>
                </Typography>
              </Fragment>
            )}
          </Toolbar>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Toolbar>
            {props.user ? (
              <Grid container>
                <Grid item xs={3}>
                  <Button className={classes.link}>
                    <Box mr={2}>
                      <PersonIcon />
                    </Box>
                    <Typography>{props.user.username}</Typography>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button className={classes.link} onClick={props.userLogout}>
                    <Typography>Logout</Typography>
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Typography>
                <Button>
                  <Link className={classes.link} to="/login">
                    Log in
                  </Link>
                </Button>
              </Typography>
            )}
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
