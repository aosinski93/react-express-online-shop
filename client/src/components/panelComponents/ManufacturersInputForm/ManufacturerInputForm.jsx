import React, { Component } from "react";
import { connect } from "react-redux";
import { addManufacturer } from "../../../actions/panelActions";
import {
  notifySuccess,
  notifyError
} from "../../../actions/notificationsActions";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";

class ManufacturerInputForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      products: []
    };
  }

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value
    });
  };
  onSubmit = async e => {
    e.preventDefault();

    if (this.state.name === "") {
      return this.props.notifyError("Name can't be empty!");
    }

    try {
      await this.props.addManufacturer({
        name: this.state.name,
        products: []
      });
    } catch (err) {
      console.error(err);
      this.props.notifyError("Something went wrong");
    } finally {
      this.props.notifySuccess(`Successfully added ${this.state.name}`);
      this.setState({
        name: "",
        products: []
      });
    }
  };

  render() {
    return (
      <div className="manufacturerInputForm col-lg-3">
        <p>Add manufacturer</p>
        <form onSubmit={this.onSubmit}>
          <FormGroup
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            labelText="Name"
          />
          <SubmitButton
            type="submit"
            value="Confirm"
            className="form-control btn-success"
            title="Submit form"
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addManufacturer, notifySuccess, notifyError }
)(ManufacturerInputForm);
