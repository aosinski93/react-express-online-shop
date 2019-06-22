import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../../actions/userActions';
import { notifyError } from '../../actions/notificationsActions';
import RegisterForm from '../../components/commonComponents/RegisterForm/RegisterForm';

class RegisterFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        if(this.state.email === "") {
           return this.props.notifyError('Email is required')
        }

        if(this.state.password === "") {
            return this.props.notifyError('Password is required')
        }

        if(this.state.password === "") {
            return this.props.notifyError('Password is required')
        }

        this.props.newUser({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            isAdmin: false
        });
        this.clearFields("");
    };

    clearFields = () => {
        this.setState({
            username: "",
            password: "",
            email: ""
        });
    };

    render() {
        return (
            <RegisterForm newUser={this.props.newUser} onChange={this.onChange} onSubmit={this.onSubmit} />
        )
    }
}

export default connect(
    null,
    { newUser, notifyError }
)(RegisterFormContainer);