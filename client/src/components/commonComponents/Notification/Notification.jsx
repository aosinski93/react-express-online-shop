import React, { Component } from "react";
import { connect } from "react-redux";
import { clearNotification } from "../../../actions/notificationsActions";
import "./notification.css";

class Notification extends Component {
  render() {
    setTimeout(() => {
      this.props.clearNotification();
    }, 2000);
    return (
      <div className="d-flex justify-content-center">
        {this.props.successMessage !== "" ? (
          <div className="successMsg">{this.props.successMessage}</div>
        ) : null}
        {this.props.errorMessage !== "" ? (
          <div className="errorMsg">{this.props.errorMessage}</div>
        ) : null}
      </div>
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
