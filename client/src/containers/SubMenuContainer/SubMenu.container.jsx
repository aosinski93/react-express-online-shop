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
    return <SubMenu item={this.props.item} />;
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
