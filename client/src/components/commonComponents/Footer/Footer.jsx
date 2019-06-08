import React from "react";
import "../../../css_utilities/common.css";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footerBar: {
    textAlign: 'center'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={"sm"} className={classes.footerBar}>
      <Typography>
        Created by Adam Osiński, {new Date().getFullYear()}&copy;
      </Typography>
    </Container>
  );
};

export default Footer;
