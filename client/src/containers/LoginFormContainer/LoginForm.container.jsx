import React, {Component} from 'react';
import {connect} from "react-redux";
import {userLogin, fakeLogin} from "../../actions/userActions";
import LoginForm from '../../components/commonComponents/LoginForm/LoginForm';
import {objIsEmpty} from "../../helpers";
import {Redirect} from 'react-router-dom';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      inputPassword: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.dbError !== true
      ? this.props.userLogin(this.props.path, {
        username: this.state.username,
        inputPassword: this.state.inputPassword
      })
      : this.fakeLogin();
    this.clearFields("loginForm");
  };

  clearFields = () => {
    this.setState({
      username: "",
      inputPassword: ""
    });
  };
  fakeLogin = () => {
    this.props.fakeLogin({
      username: this.state.username,
    })
  };

  render() {
    return (
      <>
        {!objIsEmpty(this.props.loggedUser)
          ? <Redirect to={this.props.match.path === '/login' ? '/' : ''}></Redirect>
          : <LoginForm path={this.props.path} onChange={this.onChange} onSubmit={this.onSubmit} />}
      </>
    )
  }
}

const mapStateToProps = state => ({
  loggedUser: state.user.loggedUser,
  dbError: state.global.dbError
});

export default connect(
  mapStateToProps,
  {userLogin, fakeLogin}
)(LoginFormContainer); 