import React from "react";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";

const ManufacturerInputForm = (props) => {
  return (
    <div className="manufacturers-input-form col-lg-3">
      <p>Add manufacturer</p>
      <form onSubmit={props.onSubmit}>
        <FormGroup
          type="text"
          name="name"
          value={props.name}
          onChange={props.onChange}
          labelText="Name"
        />
        <FormGroup
          type="text"
          name="logoSrc"
          value={props.logoSrc}
          onChange={props.onChange}
          labelText="Logo source"
          placeholder='URL from web'
        />
        <SubmitButton
          type="submit"
          value="Confirm"
          className="form-control btn-success"
          title="Submit form"
        />
      </form>
    </div>
  );
};

export default ManufacturerInputForm;
