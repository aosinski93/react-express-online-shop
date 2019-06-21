import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Snackbar, SnackbarContent } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    successMessage: {
      backgroundColor: "#238837",
      color: "white",
      padding: "30px 60px"
    },
    errorMessage: {
      backgroundColor: "#c92232",
      color: "#fff",
      padding: "30px 60px"
    }
  }));

const Notification = props => {
  const classes = useStyles();

  console.log(props);
  
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={props.isOpen || false}
      autoHideDuration={6000}
    >
      <SnackbarContent className={props.messageType === 'successMessage' ? classes.successMessage : classes.errorMessage} message={props.message}>

      </SnackbarContent>
    </Snackbar>

  );
}

export default Notification;
