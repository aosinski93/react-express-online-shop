import React, {Fragment} from "react";
import {Button, makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  deleteButton: {
    margin: '0 5px',
    backgroundColor: '#fff',
    color: '#333',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#c92232',
      color: '#fff',
    }
  }
}));

const DeleteButton = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        size='small'
        color="secondary"
        className={classes.deleteButton}
        onClick={props.onClick}
        data-id={props.dataId}
        title={props.title}
        data-parent={props.dataParent}
      >
        <DeleteIcon />
      </Button>
    </Fragment>
  );
};

export default DeleteButton;
