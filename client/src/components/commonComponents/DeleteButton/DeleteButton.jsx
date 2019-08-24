import React, {Fragment} from "react";
import {Fab, makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  deleteButton: {
    margin: '0 5px',
    backgroundColor: '#fff',
    color: '#333',
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
      <Fab
        size='small'
        color="secondary"
        className={classes.deleteButton}
        onClick={props.onClick}
        data-id={props.dataId}
        title={props.title}
        data-parent={props.dataParent}
      >
        <DeleteIcon />
      </Fab>
    </Fragment>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func,
  dataId: PropTypes.string,
  title: PropTypes.string,
  dataParent: PropTypes.string
};

export default DeleteButton;
