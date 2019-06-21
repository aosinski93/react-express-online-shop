import React, { Component } from "react";
import { connect } from "react-redux";
import { addManufacturer } from "../../actions/panelActions";
import {
  notifySuccess,
  notifyError
} from "../../actions/notificationsActions";
import ManufacturerInputForm from "../../components/panelComponents/ManufacturersInputForm/ManufacturerInputForm";

class ManufacturerInputFormContainer extends Component {
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
    } finally {
      this.setState({
        name: "",
        products: []
      });
    }
  };

  render() {
    return <ManufacturerInputForm onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} />
  }
}


export default connect(
  null,
  { addManufacturer, notifySuccess, notifyError }
)(ManufacturerInputFormContainer);
