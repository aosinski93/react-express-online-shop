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
  }
}));

const SubmitButton = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.submitButton}
        type={props.type}
        value={props.value}
        title={props.title}
      >
        {props.value}
      </Button>
    </Fragment>
  );
};

export default SubmitButton;
