import React, { Component } from 'react';
import { connect } from "react-redux";
import { userLogin } from "../../actions/userActions";
import LoginForm from '../../components/commonComponents/LoginForm/LoginForm';


class LoginFormContainer extends Component {
    render() {
        return (
            <LoginForm path={this.props.path} userLogin={this.props.userLogin} />
        )
    }
}

export default connect(
    null,
    { userLogin }
)(LoginFormContainer);