import React, { Component } from "react";
import FormGroup from "../FormGroup/FormGroup";
import SubmitButton from "../SubmitButton/SubmitButton";
import { Container, Grid, Typography, Box } from "@material-ui/core";

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
      <Container maxWidth={"xs"}>
        <Box m={3}>
          <Grid container>
            <Grid item xs={6}>
              <h2>Sign in</h2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
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

                <Typography className="errorField" />
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default LoginForm;

// export default connect(
//   null,
//   { fetchUser, fetchTransactions }
// )(UserForm);