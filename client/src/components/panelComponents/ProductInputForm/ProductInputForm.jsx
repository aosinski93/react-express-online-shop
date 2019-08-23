import React from "react";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";
import {Box, Container, Typography} from "@material-ui/core";
import Loader from "../../commonComponents/Loader/Loader";
import PropTypes from 'prop-types';

const ProductInputForm = props => {
  return (
    <Container>
      <Typography variant='h4' color={"primary"}>Add product</Typography>

      <Box mb={3}>
        <form onSubmit={props.onSubmit}>
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
            defaultValue={new Date().toJSON().slice(0, 10)}
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
          <FormGroup
            name="qtyOnStock"
            type="number"
            labelText="Warehouse stock"
            value={props.qtyOnStock}
            onChange={props.onChange}
          />


          {props.loading
            ? <Loader />
            : (
              <SubmitButton
                type="submit"
                value="Confirm"
                className="btn btn-success"
                title="Submit form"
                content={'Submit'}
              />
            )}

        </form>
      </Box>
    </Container>
  );
};

ProductInputForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  manufacturer: PropTypes.string,
  category: PropTypes.object,
  resolution: PropTypes.string,
  battery: PropTypes.string,
  camera: PropTypes.string,
  date_of_release: PropTypes.string,
  cpu: PropTypes.string,
  ram: PropTypes.string,
  sim_qty: PropTypes.string,
  operating_system: PropTypes.string,
  qtyOnStock: PropTypes.number,
  loading: PropTypes.bool
};

export default ProductInputForm;