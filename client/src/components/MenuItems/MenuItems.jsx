import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPanelMenu, addCategory } from "../../actions/panelActions";
import SubMenu from "../SubMenu/SubMenu.jsx";
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
      <div className="menuListContainer gridContainer">
        <div className="menuItemFormWrapper">
          <p className="panelPageTitle">Add new menu item</p>
          <form
            id="new-menu-form"
            className="menuForm"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              name="menuItemName"
              value={this.state.menuItemName}
              onChange={this.onChange}
              className="postDataInput"
              placeholder="Add new category"
            />
            <input
              type="submit"
              value="+"
              className="dataSubmit postDataButton"
              title="Add top-level category"
            />
          </form>
        </div>
        <ul className="categories">
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
