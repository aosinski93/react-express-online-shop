import React from "react";
import "./submenu.css";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";
import SubcategoryItem from "../../commonComponents/SubcategoryItem/SubcategoryItem";

const SubMenu = props => {
  return (
    <li className="sub-menu-container col-lg-8 col-md-8 col-sm-8">
      <div className="sub-menu-header row flex v-align">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <p>{props.item.name}</p>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <form
            className="menu-form d-flex row "
            id={props.item._id + "-form"}
            onSubmit={props.onSubmit}
          >
            <div className="col-lg-7 col-md-7 col-sm-7">
              <FormGroup
                type="text"
                name="subcategoryName"
                value={props.subcategoryName}
                onChange={props.onChange}
                className="post-data-input form-control"
                placeholder={`Add new subcategory to ${props.item.name} `}
              />
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-3 offset-sm-1">
              <SubmitButton
                className="data-submit post-data-button btn btn-success"
                type="submit"
                value="+"
                title="Add next subcategory"
              />
              <DeleteButton
                className="data-submit delete-data-button btn btn-danger"
                onClick={props.onDeleteMenu}
                dataId={props.item._id}
                title={`Delete ${props.item.name}`}
              />
            </div>
          </form>
        </div>
      </div>
      <ul id={props.item._id + "-subcategories"} className="subcategories">
        {props.item.subcategories &&
          props.item.subcategories.map(subcategoryItem => (
            <SubcategoryItem
              key={subcategoryItem._id}
              className="subcategory box-shadow flex v-align list-group-item d-flex align-item-center"
              subcategoryItem={subcategoryItem}
              onDeleteSubcategory={props.onDeleteSubcategory}
            />
          ))}
      </ul>
    </li>
  );
};

export default SubMenu;
