import React from "react";
import {makeStyles, Typography, Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footerBar: {
    height: 'calc(100vh - 90vh - 64px)',
    backgroundColor: "#333",
    color: '#fff',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerBar} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography>
          Created by Adam Osiński, {new Date().getFullYear()}&copy;
        </Typography>
    </Box>

  );
};

export default Footer;
