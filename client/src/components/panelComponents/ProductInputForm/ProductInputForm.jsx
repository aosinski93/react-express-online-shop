import React from "react";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";

const ProductInputForm = props => {
  return (
    <div className="productInputForm col-lg-2 col-md-2 col-sm-2 mt-1 mb-1">
      <p>Add product</p>

      <form onSubmit={props.onSubmit}>
        <FormGroup
          name="image"
          type="file"
          labelText="Image"
          onChange={props.onChange}
        />
        <img src="" alt="img" id="preview" />
        <FormGroup
          name="name"
          type="text"
          labelText="Name"
          placeholder="Product name"
          value={props.name}
          onChange={props.onChange}
        />

        <FormGroup
          name="description"
          labelText="Description"
          value={props.description}
          placeholder="Description"
          onChange={props.onChange}
        />

        <FormGroup
          name="manufacturer"
          labelText="Manufacturer"
          value={props.manufacturer}
          onChange={props.onChange}
          data={props.manufacturers}
        />

        <FormGroup
          name="category"
          labelText="Category"
          value={props.category}
          onChange={props.onChange}
          data={props.categories}
        />

        <FormGroup
          name="size"
          type="text"
          labelText="Size"
          placeholder="Inches"
          value={props.size}
          onChange={props.onChange}
        />

        <FormGroup
          name="resolution"
          type="text"
          labelText="Resolution"
          placeholder="width x height"
          value={props.resolution}
          onChange={props.onChange}
        />

        <FormGroup
          name="battery"
          type="number"
          labelText="Battery Capacity"
          value={props.battery}
          onChange={props.onChange}
        />

        <FormGroup
          name="camera"
          type="number"
          labelText="Camera"
          value={props.camera}
          onChange={props.onChange}
        />

        <FormGroup
          name="sim_qty"
          type="number"
          labelText="SIM cards slots"
          value={props.sim_qty}
          onChange={props.onChange}
        />

        <FormGroup
          name="price"
          type="number"
          labelText="Price"
          value={props.price}
          onChange={props.onChange}
        />

        <FormGroup
          name="date_of_release"
          type="date"
          labelText="Date of release"
          value={props.date_of_release}
          onChange={props.onChange}
        />

        <FormGroup
          name="ram"
          type="number"
          labelText="RAM size"
          value={props.ram}
          onChange={props.onChange}
        />

        <FormGroup
          name="cpu"
          type="number"
          labelText="CPU quantity"
          value={props.cpu}
          onChange={props.onChange}
        />

        <FormGroup
          name="operating_system"
          type="text"
          labelText="Operating System"
          placeholder="Operating system"
          value={props.operating_system}
          onChange={props.onChange}
        />

        <SubmitButton
          type="submit"
          value="Confirm"
          className="btn btn-success"
          title="Submit form"
        />
      </form>
    </div>
  );
}

export default ProductInputForm;