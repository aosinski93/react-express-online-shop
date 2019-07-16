import React, { Fragment } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  submitButton: {
    margin: '0 5px',
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #333',
    '&:hover': {
      backgroundColor: '#238837',
    }
  },
  addToCartButton: {
    backgroundColor: '#238837'
  },
  addToFavouritesButton: {
    backgroundColor: '#886185'
  }
}));

const SubmitButton = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        size="small"
        variant="contained"
        className={`${classes.submitButton} ${props.className}`}
        type={props.type}
        value={props.value}
        title={props.title}
        onClick={props.onClick}
      >
        {props.content}
      </Button>
    </Fragment>
  );
};

export default SubmitButton;
