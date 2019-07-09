import React from "react";
import {makeStyles, Container, Typography, Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footerBar: {
    height: 'calc(100vh - 90vh - 64px)',
    textAlign: 'center',
    backgroundColor: "#333"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerBar}>
      <Container>
        <Typography>
          Created by Adam Osiński, {new Date().getFullYear()}&copy;
        </Typography>
      </Container>
    </Box>

  );
};

export default Footer;
