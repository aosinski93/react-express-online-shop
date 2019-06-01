import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPanelMenu,
  fetchPanelManufacturers,
  fetchPanelProducts
} from "../../actions/panelActions";
import { setProductsFilter } from "../../actions/panelActions";
import AdminPanel from "../../components/panelComponents/AdminPanel/AdminPanel";

class AdminPanelContainer extends Component {
  componentWillMount = () => {
    this.props.fetchPanelMenu();
    this.props.fetchPanelManufacturers();
    this.props.fetchPanelProducts();
  };

  render() {
    return (
      <AdminPanel
        match={this.props.match}
        products={this.props.products}
        menu={this.props.menu}
        manufacturers={this.props.manufacturers}
        setProductsFilter={this.props.setProductsFilter}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products,
  menu: state.panel.menu,
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  { fetchPanelMenu, fetchPanelManufacturers, fetchPanelProducts, setProductsFilter }
)(AdminPanelContainer);
