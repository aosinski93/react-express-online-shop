import React, { Fragment } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  deleteButton: {
    backgroundColor: 'red',
  }
}))

const DeleteButton = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        size='small'
        variant='contained'
        color="secondary"
        className={classes.deleteButton}
        onClick={props.onClick}
        data-id={props.dataId}
        title={props.title}
        data-parent={props.dataParent}
      >
        &times;
      </Button>
    </Fragment>
  );
};

export default DeleteButton;
