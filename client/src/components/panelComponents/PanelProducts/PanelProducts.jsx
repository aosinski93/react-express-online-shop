import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPanelProducts,
  fetchPanelManufacturers
} from "../../../actions/panelActions";
import ProductFormGroup from "../ProductFormGroup/ProductFormGroup";
import ProductList from "../../commonComponents/ProductList/ProductList";

class PanelProducts extends Component {
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

  componentWillMount = () => {
    this.props.fetchPanelProducts();
    this.props.fetchPanelManufacturers();
  };

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="productsPanel">
        <div className="productListContainer col-lg-7">
          <ProductList data={this.props.products} />
        </div>
        <div className="productInputForm col-lg-5">
          <p>Add product</p>

          <form>
            <ProductFormGroup
              name="image"
              type="file"
              labelText="Image"
              value={this.state.image}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="name"
              type="text"
              labelText="Name"
              placeholder="Product name"
              value={this.state.name}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="description"
              labelText="Description"
              value={this.state.description}
              placeholder="Description"
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="manufacturer"
              labelText="Manufacturer"
              value={this.state.manufacturer}
              onChange={this.onChange}
              data={this.props.manufacturers}
            />

            <ProductFormGroup
              name="category"
              labelText="Category"
              value={this.state.category}
              onChange={this.onChange}
              data={this.props.menu}
            />

            <ProductFormGroup
              name="size"
              type="text"
              labelText="Size"
              placeholder="Inches"
              value={this.state.size}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="resolution"
              type="text"
              labelText="Resolution"
              placeholder="width x height"
              value={this.state.resolution}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="battery"
              type="number"
              labelText="Battery Capacity"
              value={this.state.battery}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="camera"
              type="number"
              labelText="Camera"
              value={this.state.camera}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="sim_qty"
              type="number"
              labelText="SIM cards slots"
              value={this.state.sim_qty}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="price"
              type="number"
              labelText="Price"
              value={this.state.price}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="date_of_release"
              type="date"
              labelText="Date of release"
              value={this.state.date_of_release}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="ram"
              type="number"
              labelText="RAM size"
              value={this.state.ram}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="cpu"
              type="number"
              labelText="CPU quantity"
              value={this.state.cpu}
              onChange={this.onChange}
            />

            <ProductFormGroup
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
              className="formButton postDataButton"
              title="Submit form"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.panel.menu,
  products: state.panel.products,
  menu: state.panel.menu,
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  { fetchPanelProducts, fetchPanelManufacturers }
)(PanelProducts);
