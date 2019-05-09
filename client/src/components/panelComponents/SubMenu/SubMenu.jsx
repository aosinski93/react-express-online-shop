import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSubcategory,
  deleteMenuItem,
  deleteMenuSubcategory
} from "../../../actions/panelActions";
import "./submenu.css";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";
import SubcategoryItem from "../../commonComponents/SubcategoryItem/SubcategoryItem";

class SubMenu extends Component {
  constructor() {
    super();
    this.state = {
      subcategoryName: ""
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.addedSubcategory) {
      if (nextProps.item._id === nextProps.addedSubcategory.parentId) {
        return nextProps.item.subcategories.unshift(nextProps.addedSubcategory);
      } else return nextProps.item.subcategories;
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
      <li className="sub-menu-container col-lg-8 col-md-8 col-sm-8">
        <div className="sub-menu-header row flex v-align">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <p>{this.props.item.name}</p>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <form
              className="menu-form d-flex row "
              id={this.props.item._id + "-form"}
              onSubmit={this.onSubmit}
            >
              <div className="col-lg-7 col-md-7 col-sm-7">
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
              <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-3 offset-sm-1">
                <SubmitButton
                  className="data-submit post-data-button btn btn-success"
                  type="submit"
                  value="+"
                  title="Add next subcategory"
                />
                <DeleteButton
                  className="data-submit delete-data-button btn btn-danger"
                  onClick={this.onDeleteMenu}
                  dataId={this.props.item._id}
                  title={`Delete ${this.props.item.name}`}
                />
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
              <SubcategoryItem
                key={subcategoryItem._id}
                className="subcategory box-shadow flex v-align list-group-item d-flex align-item-center"
                subcategoryItem={subcategoryItem}
                onDeleteSubcategory={this.onDeleteSubcategory}
              />
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
