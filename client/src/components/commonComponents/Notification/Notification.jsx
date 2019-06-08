import React, { Component } from "react";
import { connect } from "react-redux";
import { clearNotification } from "../../../actions/notificationsActions";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

class Notification extends Component {
  useStyles = () =>
    makeStyles(theme => ({
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

  render() {
    const classes = this.useStyles();

    setTimeout(() => {
      this.props.clearNotification();
    }, 2000);
    return (
      <Box m={5}>
        {this.props.successMessage !== "" ? (
          <div className={classes.successMessage}>
            {this.props.successMessage}
          </div>
        ) : null}
        {this.props.errorMessage !== "" ? (
          <div className={classes.errorMessage}>{this.props.errorMessage}</div>
        ) : null}
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.notifications.errorMessage,
  successMessage: state.notifications.successMessage
});

export default connect(
  mapStateToProps,
  { clearNotification }
)(Notification);
