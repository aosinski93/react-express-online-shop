import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import SubmitButton from "../SubmitButton/SubmitButton";
import {Link} from 'react-router-dom';
import {Container, Grid, Box} from "@material-ui/core";
import PropTypes from 'prop-types';

const LoginForm = props => {
  return (
    <Container maxWidth={"xs"}>
      <Box m={3}>
        <Grid container>
          <Grid item xs={6}>
            <h2>Sign in</h2>
          </Grid>
          <Grid item xs={6}>
            <h2>
              <Link to="/register">
                Sign up
              </Link>
            </h2>
          </Grid>
        </Grid>
        <Grid container alignContent="center">
          <Grid item xs={12}>
            <form id="loginForm" onSubmit={props.onSubmit}>
              <FormGroup
                type="text"
                name="username"
                value={props.username}
                onChange={props.onChange}
                labelText="Username"
                required={true}
              />

              <FormGroup
                type="password"
                name="inputPassword"
                value={props.inputPassword}
                onChange={props.onChange}
                labelText="Password"
                required={true}
              />

              <SubmitButton
                type="submit"
                value="Log in"
                title="Submit form"
                content={'Sign in'}
              />

            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string,
  inputPassword: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;

