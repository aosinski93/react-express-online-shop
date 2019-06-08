import React, { Component } from 'react';
import FormGroup from '../FormGroup/FormGroup';

class RegisterForm extends Component {
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
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-3 offset-lg-6 col-md-3 offset-md-3 col-sm-3 offset-sm-3">
                        <h2>Sign up</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-3 offset-sm-3">
                        <form id="registerForm">
                            <FormGroup 
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                labelText="Username"
                                required={true}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;