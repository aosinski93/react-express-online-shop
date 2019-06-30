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
  Hidden,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DevicesIcon from "@material-ui/icons/Devices";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    minHeight: 45,
    backgroundColor: "#333"
  },
  link: {
    margin: theme.spacing(1),
    color: "white",
    textDecoration: "none"
  },
  icon: {
    color: '#fff'
  },
  logo: {
    fontStyle: 'italic'
  },
}));

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Grid container>
        {window.location.pathname.indexOf("admin") !== -1
          ? (
            <>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <Toolbar>
                  <IconButton onClick={props.toggleDrawer}>
                    <MenuIcon className={classes.icon} />
                  </IconButton>
                </Toolbar>
              </Grid>
            </>
          )
          : (
            <>
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <Toolbar>
                  <Box mr={2}>
                    <DevicesIcon />
                  </Box>
                  <Typography className={classes.logo}>Phone store</Typography>
                </Toolbar>
              </Grid>
              <Hidden xsDown>
                <Grid item lg={8} md={6} sm={6}>
                  <Toolbar>
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

                  </Toolbar>
                </Grid>
              </Hidden>
            </>
          )}
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Toolbar>
            {props.user ? (
              <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Button className={classes.link} title={`${props.username}, check your profile`}>
                    <PersonIcon />
                  </Button>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Button className={classes.link} title="Finalize your order">
                    <ShoppingCartIcon />
                  </Button>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Button className={classes.link} onClick={props.userLogout} title="Logout">
                    <PowerSettingsNewIcon />
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
