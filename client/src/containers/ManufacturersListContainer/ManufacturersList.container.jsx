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
    return this.props.manufacturersFetching
      ?
      <Loader content={'Listing manufacturers...'} />
      : <ManufacturersList
        manufacturers={this.props.manufacturers}
        handleDelete={this.handleDelete}
      />
  }
}

const mapStateToProps = state => ({
  manufacturers: state.global.manufacturers,
  manufacturersFetching: state.global.manufacturersFetching
});

export default connect(
  mapStateToProps,
  {deleteManufacturer, notifySuccess, notifyError}
)(ManufacturersListContainer);
