import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteManufacturer} from "../../actions/panelActions";
import {notifySuccess, notifyError} from "../../actions/notificationsActions";
import ManufacturersList from "../..//components/panelComponents/ManufacturersList/ManufacturersList";
import Loader from "../../components/commonComponents/Loader/Loader";

class ManufacturersListContainer extends Component {
  handleDelete = e => {
    e.preventDefault();
    try {
      this.props.deleteManufacturer(e.currentTarget.dataset.id);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return this.props.manufacturers.length > 0
      ?
      <ManufacturersList
        manufacturers={this.props.manufacturers}
        handleDelete={this.handleDelete}
      />
      : <Loader content={'Listing manufacturers...'} />
  }
}

const mapStateToProps = state => ({
  manufacturers: state.global.manufacturers,
});

export default connect(
  mapStateToProps,
  {deleteManufacturer, notifySuccess, notifyError}
)(ManufacturersListContainer);
