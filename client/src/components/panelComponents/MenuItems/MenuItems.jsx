import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPanelMenu, addCategory } from "../../../actions/panelActions";
import SubMenu from "../SubMenu/SubMenu.jsx";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import "./menuitems.css";

class MenuItems extends Component {
  constructor() {
    super();
    this.state = {
      menuItemName: ""
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
    if (e.target.id === "new-menu-form") {
      this.props.addCategory({
        name: this.state.menuItemName,
        children: []
      });
    }

    this.setState({
      menuItemName: ""
    });
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
            <input
              type="submit"
              value="+"
              className="data-submit post-data-button btn btn-success mt-2 ml-2"
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
  { fetchPanelMenu, addCategory }
)(MenuItems);
