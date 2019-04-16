import React, { Component } from "react";
import FormGroup from "../FormGroup/FormGroup";
import { connect } from "react-redux";
import { addProduct } from "../../../actions/panelActions";

class ProductInputForm extends Component {
  constructor() {
    super();

    this.state = {
      image: "",
      name: "",
      description: "",
      manufacturer: "",
      category: "",
      size: "",
      resolution: "",
      battery: 0,
      camera: 0,
      sim_qty: 0,
      price: 0,
      date_of_release: "",
      ram: 0,
      cpu: 0,
      operating_system: ""
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

    this.props.addProduct({
      image: this.state.image || this.props.manufacturers[0],
      name: this.state.name,
      description: this.state.description,
      manufacturer: this.state.manufacturer,
      category: this.state.category || this.props.categories[0],
      size: this.state.size,
      resolution: this.state.resolution,
      battery: this.state.battery,
      camera: this.state.camera,
      sim_qty: this.state.sim_qty,
      price: this.state.price,
      date_of_release: this.state.date_of_release,
      ram: this.state.ram,
      cpu: this.state.cpu,
      operating_system: this.state.operating_system
    });
  };

  render() {
    return (
      <div className="productInputForm col-lg-2">
        <p>Add product</p>

        <form onSubmit={this.onSubmit}>
          <FormGroup
            name="image"
            type="file"
            labelText="Image"
            value={this.state.image}
            onChange={this.onChange}
          />

          <FormGroup
            name="name"
            type="text"
            labelText="Name"
            placeholder="Product name"
            value={this.state.name}
            onChange={this.onChange}
          />

          <FormGroup
            name="description"
            labelText="Description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.onChange}
          />

          <FormGroup
            name="manufacturer"
            labelText="Manufacturer"
            value={this.state.manufacturer}
            onChange={this.onChange}
            data={this.props.manufacturers}
          />

          <FormGroup
            name="category"
            labelText="Category"
            value={this.state.category}
            onChange={this.onChange}
            data={this.props.categories}
          />

          <FormGroup
            name="size"
            type="text"
            labelText="Size"
            placeholder="Inches"
            value={this.state.size}
            onChange={this.onChange}
          />

          <FormGroup
            name="resolution"
            type="text"
            labelText="Resolution"
            placeholder="width x height"
            value={this.state.resolution}
            onChange={this.onChange}
          />

          <FormGroup
            name="battery"
            type="number"
            labelText="Battery Capacity"
            value={this.state.battery}
            onChange={this.onChange}
          />

          <FormGroup
            name="camera"
            type="number"
            labelText="Camera"
            value={this.state.camera}
            onChange={this.onChange}
          />

          <FormGroup
            name="sim_qty"
            type="number"
            labelText="SIM cards slots"
            value={this.state.sim_qty}
            onChange={this.onChange}
          />

          <FormGroup
            name="price"
            type="number"
            labelText="Price"
            value={this.state.price}
            onChange={this.onChange}
          />

          <FormGroup
            name="date_of_release"
            type="date"
            labelText="Date of release"
            value={this.state.date_of_release}
            onChange={this.onChange}
          />

          <FormGroup
            name="ram"
            type="number"
            labelText="RAM size"
            value={this.state.ram}
            onChange={this.onChange}
          />

          <FormGroup
            name="cpu"
            type="number"
            labelText="CPU quantity"
            value={this.state.cpu}
            onChange={this.onChange}
          />

          <FormGroup
            name="operating_system"
            type="text"
            labelText="Operating System"
            placeholder="Operating system"
            value={this.state.operating_system}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="Confirm"
            className="btn btn-success"
            title="Submit form"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.panel.menu,
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  { addProduct }
)(ProductInputForm);
