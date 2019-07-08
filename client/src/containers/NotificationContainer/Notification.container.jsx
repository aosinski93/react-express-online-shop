import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Notification from '../../components/commonComponents/Notification/Notification';
import {clearNotification} from "../../actions/notificationsActions";

class NotificationContainer extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.successMessage !== nextProps.successMessage
            || this.props.errorMessage !== nextProps.errorMessage);
    }

    render() {
        if (this.props.errorMessage !== '' || this.props.successMessage !== '') {
            setTimeout(() => {
                this.props.clearNotification();
            }, 4000);
        }
        return (
            <Fragment>
                {this.props.successMessage !== ''
                    ? <Notification
                        isOpen={true}
                        message={this.props.successMessage}
                        messageType="successMessage"
                    /> :
                    this.props.errorMessage !== ''
                        ? <Notification
                            isOpen={true}
                            message={this.props.errorMessage}
                            messageType="errorMessage"
                        /> : null}
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
    {clearNotification}
)(NotificationContainer);