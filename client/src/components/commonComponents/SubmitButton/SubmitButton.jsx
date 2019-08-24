import React, { Fragment } from "react";
import { Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  submitButton: {
    margin: '0 5px',
    color: '#fff',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: '#238837',
    }
  },
  addToCartButton: {
    backgroundColor: '#238837'
  },
  addToFavouritesButton: {
    backgroundColor: '#886185'
  },
  customImgInput: {
    padding: '15px',
    border: '1px dashed black',
    boxShadow: 'none',
    margin: '10px',
    backgroundColor: 'lightgray',
    color: '#000',
    '&:hover': {
      backgroundColor: 'lightblue'
    }
  }
}));

const SubmitButton = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Fab
        size="small"
        variant={props.variant}
        className={`${classes.submitButton} ${classes[props.className]}`}
        type={props.type}
        value={props.value}
        title={props.title}
        onClick={props.onClick}
      >
        {props.content}
      </Fab>
    </Fragment>
  );
};

export default SubmitButton;
