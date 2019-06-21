import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteManufacturer } from "../../actions/panelActions";
import { notifySuccess, notifyError } from "../../actions/notificationsActions";
import { setProductsFilter } from "../../actions/panelActions";
import ManufacturersList from "../..//components/panelComponents/ManufacturersList/ManufacturersList";

class ManufacturersListContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  handleDelete = e => {
    e.preventDefault();
    try {
      this.props.deleteManufacturer(e.currentTarget.dataset.id);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <ManufacturersList
        manufacturers={this.props.manufacturers}
        handleDelete={this.handleDelete}
        setProductsFilter={this.props.setProductsFilter}
      />
    );
  }
}

const mapStateToProps = state => ({
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  { deleteManufacturer, notifySuccess, notifyError, setProductsFilter }
)(ManufacturersListContainer);
