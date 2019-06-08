import React, { Component } from 'react';
import connect from 'react-redux';
import { newUser } from '../../actions/userActions';
import RegisterForm from '../../components/commonComponents/RegisterForm/RegisterForm';

class RegisterFormContainer extends Component {
    render() {
        return (
            <RegisterForm newUser={this.props.newUser} />
        )
    }
}

export default connect(
    null, 
    newUser
)(RegisterFormContainer);