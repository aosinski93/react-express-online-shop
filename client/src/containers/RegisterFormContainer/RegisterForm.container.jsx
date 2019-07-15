import React, {Component} from 'react';
import {connect} from 'react-redux';
import {newUser, fakeRegister} from '../../actions/userActions';
import {notifyError} from '../../actions/notificationsActions';
import RegisterForm from '../../components/commonComponents/RegisterForm/RegisterForm';
import {objIsEmpty} from "../../helpers";
import {Redirect} from "react-router-dom";

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

    if (this.state.email === "") {
      return this.props.notifyError('Email is required')
    }

    if (this.state.password === "") {
      return this.props.notifyError('Password is required')
    }

    if (this.state.password === "") {
      return this.props.notifyError('Password is required')
    }

    let newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      isAdmin: false
    };

    this.props.dbError !== true
      ? this.props.newUser(newUser)
      : this.props.fakeRegister({
        newUser
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

      !objIsEmpty(this.props.registeredUser)
        ? <Redirect to={`/login`} />
        : <RegisterForm newUser={this.props.newUser} onChange={this.onChange} onSubmit={this.onSubmit} />

    )
  }
}

const mapStateToProps = state => ({
  registeredUser: state.user.registeredUser,
  dbError: state.global.dbError
});

export default connect(
  mapStateToProps,
  {newUser, notifyError, fakeRegister}
)(RegisterFormContainer);