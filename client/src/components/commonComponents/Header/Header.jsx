import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Hidden,
  Box, Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DevicesIcon from "@material-ui/icons/Devices";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  root: {
    flexGrow: 1
  },
  header: {
    minHeight: '5vh'
  },
  link: {
    whiteSpace: 'nowrap',
    color: "white",
    textDecoration: "none",
    display: 'flex'
  },
  icon: {
    color: '#fff'
  },
  logo: {
    fontStyle: 'italic'
  },
  whiteText: {
    color: 'white'
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
              <Grid item lg={9} md={7} sm={7} xs={5}>
              </Grid>
            </>
          )
          : (
            <>
              <Grid item lg={2} md={2} sm={3} xs={3}>
                <Toolbar>
                  <Link className={classes.link} to="/">
                    <Box mr={2}>
                      <DevicesIcon />
                    </Box>
                    <Typography className={classes.logo}>DigiStore</Typography>
                  </Link>
                </Toolbar>
              </Grid>
              <Hidden xsDown>
                <Grid item lg={8} md={7} sm={6}>
                  {window.location.pathname.indexOf("admin") === -1 && (
                    <Toolbar>
                      <Fragment>
                        <Link className={classes.link} to="/">
                          <Typography>
                            <Button className={classes.whiteText}>
                              Home
                            </Button>
                          </Typography>
                        </Link>
                        <Link className={classes.link} to="/store">
                          <Typography>
                            <Button className={classes.whiteText}>
                              Store
                            </Button>
                          </Typography>
                        </Link>
                        <Link className={`${classes.link}`} to="/contact">
                          <Typography>
                            <Button className={classes.whiteText}>
                              Contact
                            </Button>
                          </Typography>
                        </Link>

                        {props.user && props.user.isAdmin && (
                          <Link className={classes.link} to="/admin">
                            <Typography>
                              <Button className={classes.whiteText}>
                                Admin Page
                              </Button>
                            </Typography>
                          </Link>
                        )}
                      </Fragment>
                    </Toolbar>
                  )}
                </Grid>
              </Hidden>
            </>
          )}
        <Hidden smUp>
          <Grid item xs={3}></Grid>
        </Hidden>
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <Toolbar>
            <Grid container justify={"flex-end"}>
              {window.location.pathname.indexOf("admin") === -1 && (
                <>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    {props.user ? (
                        <Button className={classes.link} title={`${props.user.username}, check your profile`}>
                          <PersonIcon />
                        </Button>)
                      : (
                        <Button className={classes.whiteText}>
                          <Link className={classes.link} to="/login">
                            <Typography>
                              Log in
                            </Typography>
                          </Link>
                        </Button>
                      )}
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Button className={classes.link} title="Finalize your order">
                      <Link className={classes.link} to="/cart">
                        <Badge badgeContent={props.cartCount} color={"secondary"}>
                          <ShoppingCartIcon />
                        </Badge>
                      </Link>
                    </Button>
                  </Grid>
                </>
              )}


              {props.user && (
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Button className={classes.link} onClick={props.userLogout} title="Logout">
                    <PowerSettingsNewIcon />
                  </Button>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
