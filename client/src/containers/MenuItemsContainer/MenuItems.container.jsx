import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPanelMenu, addCategory } from "../../actions/panelActions";
import {
  notifyError,
  notifySuccess
} from "../../actions/notificationsActions";
import MenuItems from "../../components/panelComponents/MenuItems/MenuItems";

class MenuItemsContainer extends Component {
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
          return <MenuItems menu={this.props.menu} onChange={this.onChange} onSubmit={this.onSubmit} />
      }
}



const mapStateToProps = state => ({
    menu: state.panel.menu
  });
  
  export default connect(
    mapStateToProps,
    { fetchPanelMenu, addCategory, notifySuccess, notifyError }
  )(MenuItemsContainer);