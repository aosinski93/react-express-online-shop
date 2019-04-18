import React, { Fragment } from "react";

const DeleteButton = props => {
  return (
    <Fragment>
      <button
        className={props.className}
        onClick={props.onClick}
        data-id={props.dataId}
        title={props.title}
        data-parent={props.dataParent}
      >
        &times;
      </button>
    </Fragment>
  );
};

export default DeleteButton;
