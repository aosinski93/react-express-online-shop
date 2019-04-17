import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSubcategory,
  deleteMenuItem,
  deleteMenuSubcategory
} from "../../../actions/panelActions";
import "./submenu.css";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";

class SubMenu extends Component {
  constructor() {
    super();
    this.state = {
      subcategoryName: ""
    };
  }

  componentWillReceiveProps = nextProps => {
    
    if (nextProps.addedSubcategory) {
        if(nextProps.item._id === nextProps.addedSubcategory.parentId) {
          return nextProps.item.subcategories.unshift(nextProps.addedSubcategory);
        }
        else return nextProps.item.subcategories
    }
  };

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    let parentId = e.target.id.split("-")[0];

    this.props.addSubcategory(
      {
        parentId: parentId,
        subcategoryName: this.state.subcategoryName
      },
      parentId
    );

    this.setState({
      subcategoryName: ""
    });
  };

  onDeleteMenu = e => {
    e.preventDefault();
    this.props.deleteMenuItem(e.target.dataset.id);
  };
  onDeleteSubcategory = e => {
    e.preventDefault();
    this.props.deleteMenuSubcategory(
      e.target.dataset.parent,
      e.target.dataset.id
    );
  };

  render() {
    return (
      <li className="sub-menu-container col-lg-8">
        <div className="sub-menu-header row flex v-align">
          <div className="col-lg-2">
            <p>{this.props.item.name}</p>
          </div>
          <div className="col-lg-10">
            <form
              className="menu-form d-flex row "
              id={this.props.item._id + "-form"}
              onSubmit={this.onSubmit}
            >
              <div className="col-lg-7">
                <FormGroup
                  type="text"
                  name="subcategoryName"
                  value={this.state.subcategoryName}
                  onChange={this.onChange}
                  className="post-data-input form-control"
                  placeholder={`Add new subcategory to ${
                    this.props.item.name
                  } `}
                />
              </div>
              <div className="col-lg-3 offset-lg-1">
                <input
                  type="submit"
                  value="+"
                  className="data-submit post-data-button btn btn-success"
                  title="Add subcategory"
                />
                <button
                  className="data-submit delete-data-button btn btn-danger"
                  onClick={this.onDeleteMenu}
                  data-id={this.props.item._id}
                  title="Delete submenu"
                >
                  &times;
                </button>
              </div>
            </form>
          </div>
        </div>
        <ul
          id={this.props.item._id + "-subcategories"}
          className="subcategories"
        >
          {this.props.item.subcategories &&
            this.props.item.subcategories.map(subcategoryItem => (
              <li
                key={subcategoryItem._id}
                className="subcategory flex v-align list-group-item d-flex align-item-center"
              >
                <div className="col-lg-10 d-flex align-item-center">
                  <p className="subcategory-name col-lg-10">
                    {subcategoryItem.name}
                  </p>
                </div>
                <div className="col-lg-2 d-flex align-item-center">
                  <button
                    className="data-submit delete-data-button btn btn-danger"
                    onClick={this.onDeleteSubcategory}
                    data-id={subcategoryItem._id}
                    data-parent={subcategoryItem.parentId}
                    title="Delete subcategory"
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  addedSubcategory: state.panel.addedSubcategory,
  menu: state.panel.menu
});

export default connect(
  mapStateToProps,
  { addSubcategory, deleteMenuItem, deleteMenuSubcategory }
)(SubMenu);