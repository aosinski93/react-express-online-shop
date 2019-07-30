import React, {Component} from "react";
import {connect} from "react-redux";
import {addManufacturer} from "../../actions/panelActions";
import {
  notifySuccess,
  notifyError
} from "../../actions/notificationsActions";
import ManufacturerInputForm from "../../components/panelComponents/ManufacturersInputForm/ManufacturerInputForm";
import Loader from "../../components/commonComponents/Loader/Loader";

class ManufacturerInputFormContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      logoSrc: "",
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
        logoSrc: this.state.logoSrc,
        products: []
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        name: "",
        logoSrc: "",
        products: []
      });
    }
  };

  render() {
    return this.props.manufacturerAdding
      ? <Loader content={`Manufacturer is being added`} />
      : <ManufacturerInputForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        name={this.state.name}
        logoSrc={this.state.logoSrc}
      />
  }
}

const mapStateToProps = state => ({
  manufacturerAdding: state.loading.manufacturerAdding
});

export default connect(
  mapStateToProps,
  {addManufacturer, notifySuccess, notifyError}
)(ManufacturerInputFormContainer);
