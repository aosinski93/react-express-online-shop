import React from 'react';
import FormGroup from '../FormGroup/FormGroup';
import {Container, Box, Grid } from '@material-ui/core';
import SubmitButton from '../SubmitButton/SubmitButton';
import {Link} from "react-router-dom";

const RegisterForm = (props) => {


  return (
    <Container maxWidth={"xs"}>
      <Box m={3}>
        <Grid container>
          <Grid item xs={6}>
            <h2>
              <Link to="/login">
                Sign in
              </Link>
            </h2>
          </Grid>
          <Grid item xs={6}>
            <h2>Sign up</h2>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <form id="registerForm" onSubmit={props.onSubmit}>
              <FormGroup
                type="text"
                name="username"
                value={props.username}
                onChange={props.onChange}
                labelText="Username"
                required={true}
              />

              <FormGroup
                type="email"
                name="email"
                value={props.email}
                onChange={props.onChange}
                labelText="Email"
                required={true}
              />

              <FormGroup
                type="password"
                name="password"
                value={props.password}
                onChange={props.onChange}
                labelText="Password"
                required={true}
              />

              <SubmitButton
                type="submit"
                value="Sign up"
                title="Submit form"
                content={'Sign up'}
              />
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};


export default RegisterForm;