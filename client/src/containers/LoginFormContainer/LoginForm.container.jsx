import React, { Component } from 'react';
import { connect } from "react-redux";
import { userLogin } from "../../actions/userActions";
import LoginForm from '../../components/commonComponents/LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';

class LoginFormContainer extends Component {
    render() {
        
        
        return (
            <>
                { Object.entries(this.props.loggedUser).length !== 0 
                ? <Redirect to="/" />
                : <LoginForm path={this.props.path} userLogin={this.props.userLogin} /> }
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggedUser: state.user.loggedUser
});

export default connect(
    mapStateToProps,
    { userLogin }
)(LoginFormContainer); 