import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSubcategory,
  deleteMenuItem,
  deleteMenuSubcategory
} from "../../actions/panelActions";
import SubMenu from "../../components/panelComponents/SubMenu/SubMenu";

class SubMenuContainer extends Component {
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
    let value = e.currentTarget.value;
    let name = e.currentTarget.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    let parentId = e.currentTarget.id.split("-")[0];

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
    this.props.deleteMenuItem(e.currentTarget.dataset.id);
  };
  onDeleteSubcategory = e => {
    e.preventDefault();
  
    this.props.deleteMenuSubcategory(
      e.currentTarget.dataset.parent,
      e.currentTarget.dataset.id
    );
  };

  render() {
    return <SubMenu
      item={this.props.item}
      onChange={this.onChange}
      onDeleteMenu={this.onDeleteMenu}
      onDeleteSubcategory={this.onDeleteSubcategory} 
      onSubmit={this.onSubmit}/>;
  }
}

const mapStateToProps = state => ({
  addedSubcategory: state.panel.addedSubcategory,
  menu: state.panel.menu
});

export default connect(
  mapStateToProps,
  { addSubcategory, deleteMenuItem, deleteMenuSubcategory }
)(SubMenuContainer);
