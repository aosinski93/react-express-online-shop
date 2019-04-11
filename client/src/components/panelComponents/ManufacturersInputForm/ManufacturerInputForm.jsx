import React, { Component } from "react";
import { connect } from "react-redux";
import { addManufacturer } from "../../../actions/panelActions";
import FormGroup from "../FormGroup/FormGroup";

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
  onSubmit = e => {
    e.preventDefault();

    this.props.addManufacturer({
      name: this.state.name,
      products: []
    });
  };

  render() {
    return (
      <div className="manufacturerInputForm col-lg-5">
        <p>Add manufacturer</p>
        <form onSubmit={this.onSubmit}>
          <FormGroup
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            labelText="Name"
          />

          <input
            type="submit"
            value="Confirm"
            className="formButton postDataButton"
            title="Submit form"
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addManufacturer }
)(ManufacturerInputForm);
