import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";

const SubcategoryItem = props => {
  return (
    <li key={props.subcategoryItem._id} className={props.className}>
      <div className="col-lg-10 ">
        <p className="subcategory-name col-lg-10 mb-0 mt-2">
          {props.subcategoryItem.name}
        </p>
      </div>
      <div className="col-lg-2 d-flex align-item-center">
        <DeleteButton
          className="data-submit delete-data-button btn btn-danger"
          onClick={props.onDeleteSubcategory}
          dataId={props.subcategoryItem._id}
          dataParent={props.subcategoryItem.parentId}
          title={`Delete ${props.subcategoryItem.name}`} 
          />
      </div>
    </li>
  );
};

export default SubcategoryItem;
