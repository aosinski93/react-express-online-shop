import React from "react";

const ProductFormGroup = props => {
  switch (props.name) {
    case "description":
      return (
        <div className="formGroup">
          <label>{props.labelText}</label>
          <textarea
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
    case "manufacturer":
      return (
        <div className="formGroup">
          <label>{props.labelText}</label>
          <select
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
    case "category":
      return (
        <div className="formGroup">
          <label>{props.labelText}</label>
          <select
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
    default:
      return (
        <div className="formGroup">
          <label>{props.labelText}</label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
  }
};

export default ProductFormGroup;
