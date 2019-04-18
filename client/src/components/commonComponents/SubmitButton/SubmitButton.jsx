import React, { Fragment } from "react";

const SubmitButton = props => {
  return (
    <Fragment>
      <button
        className={props.className}
        type={props.type}
        value={props.value}
        title={props.title}
      >
        {props.value}
      </button>
    </Fragment>
  );
};

export default SubmitButton;
