import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  fetchPanelMenu,
  fetchPanelManufacturers,
  fetchPanelProducts
} from "../../actions/panelActions";
import { userLogin } from "../../actions/userActions";
import { setProductsFilter } from "../../actions/panelActions";
import AdminPanel from "../../components/panelComponents/AdminPanel/AdminPanel";
import LoginFormContainer from "../LoginFormContainer/LoginForm.container";

class AdminPanelContainer extends Component {
  componentWillMount = () => {
    this.props.fetchPanelMenu();
    this.props.fetchPanelManufacturers();
    this.props.fetchPanelProducts();
  };

  render() {    
    return (
      <Fragment>
        {true || (Object.entries(this.props.loggedUser).length !== 0 &&
        this.props.loggedUser.isAdmin === true )? (
          <AdminPanel
            match={this.props.match}
            products={this.props.products}
            menu={this.props.menu}
            manufacturers={this.props.manufacturers}
            setProductsFilter={this.props.setProductsFilter}
          />
        ) : (
          <LoginFormContainer path={this.props.match.path} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products,
  menu: state.panel.menu,
  manufacturers: state.panel.manufacturers,
  loggedUser: state.user.loggedUser
});

export default connect(
  mapStateToProps,
  {
    fetchPanelMenu,
    fetchPanelManufacturers,
    fetchPanelProducts,
    setProductsFilter,
    userLogin
  }
)(AdminPanelContainer);
