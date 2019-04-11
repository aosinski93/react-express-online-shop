import React from "react";

const FormGroup = props => {
  switch (props.name) {
    case "description":
      return (
        <div className="formGroup">
          <label className="inputLabel">{props.labelText}</label>
          <textarea
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="postDataInput"
          />
        </div>
      );
    case "manufacturer":
      return (
        <div className="formGroup">
          <label className="inputLabel">{props.labelText}</label>
          <select
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="postDataInput"
          >
            {props.data.map(option => {
              return (
                <option key={props.data.indexOf(option)} value={option.name}>
                  {option.name.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      );
    case "category":
      return (
        <div className="formGroup">
          <label className="inputLabel">{props.labelText}</label>
          <select
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="postDataInput"
          >
            {props.data.map(option => {
              return (
                <option key={props.data.indexOf(option)} value={option.name}>
                  {option.name.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      );
    case "image":
      return (
        <div className="formGroup">
          <label className="inputLabel">{props.labelText}</label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
    default:
      return (
        <div className="formGroup">
          <label className="inputLabel">{props.labelText}</label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="postDataInput formInput"
            placeholder={props.placeholder}
          />
        </div>
      );
  }
};

export default FormGroup;
