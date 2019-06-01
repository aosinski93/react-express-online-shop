import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchUser } from "../../actions/userActions";
// import { fetchTransactions } from "../../actions/transactionActions";
// import "./loginform.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    this.props.signIn();
    // const user = {
    //   name: this.state.name,
    //   inputPassword: this.state.inputPassword
    // };

    // this.props.fetchUser(user);
    // this.props.fetchTransactions(user);
    this.clearFields("loginForm");
  };

  clearFields = () => {
    this.setState({
      name: "",
      inputPassword: ""
    });
  };

  render() {
    return (
      <div className="formContainer flex col-direction h-align v-align">
        <h2>Sign in</h2>
        <form id="loginForm" onSubmit={this.onSubmit}>
          <div className="formGroup flex col-direction">
            <label className="inputLabel">Name</label>
            <input
              className="formInput"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
              autoFocus={true}
            />
          </div>
          <div className="formGroup">
            <label className="inputLabel">Password</label>
            <input
              className="formInput"
              type="password"
              name="inputPassword"
              value={this.state.inputPassword}
              onChange={this.onChange}
              required
            />
          </div>
          <button className="formButton loginButton" type="submit">
            Log in
          </button>
          <p className="errorField" />
        </form>
      </div>
    );
  }
}


export default LoginForm

// export default connect(
//   null,
//   { fetchUser, fetchTransactions }
// )(UserForm);
