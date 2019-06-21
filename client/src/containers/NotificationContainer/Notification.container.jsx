import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Notification from '../../components/commonComponents/Notification/Notification';
import { clearNotification } from "../../actions/notificationsActions";

class NotificationContainer extends Component {


    render() {
        setTimeout(() => {
            this.props.clearNotification();
        }, 6000);

        return (
            <Fragment>
                {this.props.successMessage !== ''
                    ? <Notification
                        isOpen={true}
                        message={this.props.successMessage}
                        messageType="successMessage"
                    /> :
                    <></>}
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.notifications.errorMessage,
    successMessage: state.notifications.successMessage
});

export default connect(
    mapStateToProps,
    { clearNotification }
)(NotificationContainer);