import React, {Fragment} from "react";
import {Button, makeStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

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
      <Button
        size="small"
        variant="contained"
        className={`${classes.submitButton} ${classes[props.className]}`}
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

SubmitButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default SubmitButton;
