import React from "react";

const FormGroup = props => {
  switch (props.name) {
    case "description":
      return (
        <div className="form-group">
          <label htmlFor={`${props.name}`} className="input-label">
            {props.labelText}
          </label>
          <textarea
            name={props.name}
            id={`${props.name}`}
            value={props.value}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
      );
    case "manufacturer":
      return (
        <div className="form-group">
          <label htmlFor={`${props.name}`} className="input-label">
            {props.labelText}
          </label>
          <select
            name={props.name}
            id={`${props.name}`}
            value={props.value}
            onChange={props.onChange}
            required
            className="form-control"
          >
            {props.data.map(option => {
              return (
                <option key={props.data.indexOf(option)} value={option._id}>
                  {option.name.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      );
    case "category":
      return (
        <div className="form-group">
          <label htmlFor={`${props.name}`} className="input-label">
            {props.labelText}
          </label>
          <select
            name={props.name}
            id={`${props.name}`}
            value={props.value}
            onChange={props.onChange}
            className="form-control"
          >
            {props.data.map(option => {
              return (
                <option key={props.data.indexOf(option)} value={option._id}>
                  {option.name.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      );
    case "image":
      return (
        <div className="form-group">
          <label htmlFor={`${props.name}`} className="input-label">
            {props.labelText}
          </label>
          <input
            type={props.type}
            id={`${props.name}`}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
    default:
      return (
        <div className="form-group">
          {props.labelText && 
          <label htmlFor={`${props.name}`} className="input-label">
          {props.labelText}
        </label>}
          <input
            type={props.type}
            id={`${props.name}`}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="form-control"
            placeholder={props.placeholder}
          />
        </div>
      );
  }
};

export default FormGroup;
