import React, { Fragment } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  submitButton: {
    backgroundColor: "green"
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
