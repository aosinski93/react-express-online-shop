import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPanelProducts } from "../../actions/panelActions";
import ProductFormGroup from "../ProductFormGroup/ProductFormGroup";

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
      date_of_release: 0,
      ram: 0,
      cpu: 0,
      operating_system: ""
    };
  }

  componentWillMount = () => {
    this.props.fetchPanelProducts();
  };

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="productsPanel">
        <div className="productList col-lg-7">list</div>
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
              value={this.state.name}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="description"
              labelText="Description"
              value={this.state.description}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="manufacturer"
              labelText="Manufacturer"
              value={this.state.manufacturer}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="category"
              labelText="Category"
              value={this.state.category}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="size"
              type="text"
              labelText="Size"
              value={this.state.size}
              onChange={this.onChange}
            />

            <ProductFormGroup
              name="resolution"
              type="text"
              labelText="Resolution"
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
              value={this.state.operating_system}
              onChange={this.onChange}
            />

            <input
              type="submit"
              value="Confirm"
              className="dataSubmit postDataButton"
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
  menu: state.panel.menu
});

export default connect(
  mapStateToProps,
  { fetchPanelProducts }
)(PanelProducts);
