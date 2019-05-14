import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/panelActions";
import {
  notifyError,
  notifySuccess
} from "../../actions/notificationsActions";
import ProductInputForm from "../../components/panelComponents/ProductInputForm/ProductInputForm";

class ProductInputFormContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        image: "",
        imageName: "",
        imageLocalization: "",
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
  
      if (name === "image") {
        var reader = new FileReader();
  
        reader.onload = function(e) {
          document.getElementById("preview").setAttribute("src", e.target.result);
        };
  
        reader.readAsDataURL(e.target.files[0]);
  
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
        e.preventDefault();
        this.props.notifyError("Set the manufacturer");
      } else if (this.state.category === "") {
        e.preventDefault();
        this.props.notifyError("Set the category");
      }
        else {
        const product = {
          image: this.state.image,
          imageName: this.state.imageName,
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
        };
  
        try {
          this.props.addProduct(product);
        } catch (err) {
          this.props.notifyError("Something went wrong");
          console.error(err);
        } finally {
          this.props.notifySuccess("Success");
        }
      }
    };

    render() {
        return <ProductInputForm onChange={this.onChange} onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = state => ({
    categories: state.panel.menu,
    manufacturers: state.panel.manufacturers
  });
  
  export default connect(
    mapStateToProps,
    { addProduct, notifyError, notifySuccess }
  )(ProductInputFormContainer);