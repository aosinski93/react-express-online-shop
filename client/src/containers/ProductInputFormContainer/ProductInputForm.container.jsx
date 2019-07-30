import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, uploadImage } from "../../actions/panelActions";
import { notifyError, notifySuccess } from "../../actions/notificationsActions";
import ProductInputForm from "../../components/panelComponents/ProductInputForm/ProductInputForm";

class ProductInputFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      manufacturer: "",
      category: "",
      size: "",
      resolution: "",
      battery: "",
      camera: "",
      sim_qty: "",
      price: "",
      date_of_release: "",
      ram: "",
      cpu: "",
      operating_system: "",
      qtyOnStock: 0
    };
  }

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "image") {
      this.setState({
        image: e.target.files[0],
        imageName: e.target.files[0].name
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.manufacturer === "") {
      this.props.notifyError("Select the manufacturer");
    } else if (this.state.category === "") {
      this.props.notifyError("Select the category");
    } else {
      const product = {
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
        operating_system: this.state.operating_system,
        qtyOnStock: this.state.qtyOnStock
      };

      this.props.addProduct(product);

      this.setState({
        name: "",
        description: "",
        manufacturer: "",
        category: "",
        size: "",
        resolution: "",
        battery: null,
        camera: null,
        sim_qty: null,
        price: null,
        date_of_release: null,
        ram: null,
        cpu: null,
        operating_system: "",
        qtyOnStock: 0
      })
    }
  };

  render() {
    return (
      <ProductInputForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        manufacturers={this.props.manufacturers}
        categories={this.props.categories}
        loading={this.props.loading}
        name={this.state.name}
        description={this.state.description}
        manufacturer={this.state.manufacturer}
        category={this.state.category || this.props.categories[0]}
        size={this.state.size}
        resolution={this.state.resolution}
        battery={this.state.battery}
        camera={this.state.camera}
        sim_qty={this.state.sim_qty}
        price={this.state.price}
        date_of_release={this.state.date_of_release}
        ram={this.state.ram}
        cpu={this.state.cpu}
        operating_system={this.state.operating_system}
        qtyOnStock={this.state.qtyOnStock}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.panel.menu,
  manufacturers: state.global.manufacturers,
  loading: state.global.loading
});

export default connect(
  mapStateToProps,
  { addProduct, uploadImage, notifyError, notifySuccess }
)(ProductInputFormContainer);
