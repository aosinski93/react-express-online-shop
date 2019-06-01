import React, { Component } from "react";
import FormGroup from "../FormGroup/FormGroup";
import SubmitButton from "../SubmitButton/SubmitButton";

class LoginForm extends Component {
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
    this.props.userLogin(this.props.path, {
      username: this.state.username,
      inputPassword: this.state.inputPassword
    });
    this.clearFields("loginForm");
  };

  clearFields = () => {
    this.setState({
      username: "",
      inputPassword: ""
    });
  };

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
            <h2>Sign in</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <form id="loginForm" onSubmit={this.onSubmit}>
              <FormGroup
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                labelText="Name"
                required={true}
              />

              <FormGroup
                type="password"
                name="inputPassword"
                value={this.state.inputPassword}
                onChange={this.onChange}
                labelText="Password"
                required={true}
              />

              <SubmitButton
                type="submit"
                value="Log in"
                className="form-control btn-success"
                title="Submit form"
              />

              <p className="errorField" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;

// export default connect(
//   null,
//   { fetchUser, fetchTransactions }
// )(UserForm);
