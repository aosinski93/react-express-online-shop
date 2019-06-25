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
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

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
  }
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
              <Grid item xs={9} sm={9} md={9} lg={9}></Grid>
            </>
          )
          : (
            <Grid item xs={10} lg={10} md={10} sm={10}>
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
          )}
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Toolbar>
            {props.user ? (
              <Grid container>
                <Grid item></Grid>
                <Grid item>
                  <Button className={classes.link}>
                    <Box mr={2}>
                      <PersonIcon />
                    </Box>
                    <Typography>{props.user.username}</Typography>
                  </Button>
                </Grid>
                <Grid item>
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
