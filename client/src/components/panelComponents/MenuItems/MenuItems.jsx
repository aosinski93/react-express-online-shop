import React from "react";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import "./menuitems.css";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";
import SubMenuContainer from "../../../containers/SubMenuContainer/SubMenu.container.jsx";

const MenuItems = props => {
  return (
    <div className="menu-list-container container">
      <div className="menu-item-form-wrapper col-lg-6 col-md-6 col-sm-6">
        <form
          id="new-menu-form"
          className="menu-form d-flex align-items-center"
          onSubmit={props.onSubmit}
        >
          <FormGroup
            type="text"
            name="menuItemName"
            value={props.menuItemName}
            onChange={props.onChange}
            className="post-datainput form-control"
            placeholder="Add new category"
            labelText="Add new menu item"
          />
          <SubmitButton
            type="submit"
            value="+"
            className="data-submit post-data-button btn btn-success mt-3 ml-2"
            title="Add top-level category"
          />
        </form>
      </div>
      <ul className="categories list-group">
        {props.menu &&
          props.menu.map(item => {
            return <SubMenuContainer key={item._id} item={item} />;
          })}
      </ul>
    </div>
  );
};

export default MenuItems;
