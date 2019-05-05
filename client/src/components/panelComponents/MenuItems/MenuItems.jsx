import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPanelMenu, addCategory } from "../../../actions/panelActions";
import {
  notifyError,
  notifySuccess
} from "../../../actions/notificationsActions";
import SubMenu from "../SubMenu/SubMenu.jsx";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import "./menuitems.css";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";

class MenuItems extends Component {
  constructor() {
    super();
    this.state = {
      menuItemName: "",
      loading: true
    };
  }

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.menuItemName === "") {
      return this.props.notifyError(`Category name can't be empty!`);
    }

    try {
      if (e.target.id === "new-menu-form") {
        this.props.addCategory({
          name: this.state.menuItemName,
          children: []
        });
      }

      this.setState({
        menuItemName: ""
      });
    } catch (err) {
      console.error(err);
      this.props.notifyError("Something went wrong");
    } finally {
      this.props.notifySuccess("Successfuly added new category");
    }
  };

  render() {
    return (
      <div className="menu-list-container container">
        <div className="menu-item-form-wrapper col-lg-6">
          <form
            id="new-menu-form"
            className="menu-form d-flex align-items-center"
            onSubmit={this.onSubmit}
          >
            <FormGroup
              type="text"
              name="menuItemName"
              value={this.state.menuItemName}
              onChange={this.onChange}
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
          {this.props.menu &&
            this.props.menu.map(item => {
              return <SubMenu key={item._id} item={item} />;
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.panel.menu
});

export default connect(
  mapStateToProps,
  { fetchPanelMenu, addCategory, notifySuccess, notifyError }
)(MenuItems);
