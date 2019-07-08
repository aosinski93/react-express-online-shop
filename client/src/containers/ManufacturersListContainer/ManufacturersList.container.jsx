import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteManufacturer} from "../../actions/panelActions";
import {notifySuccess, notifyError} from "../../actions/notificationsActions";
import {setProductsFilter} from "../../actions/panelActions";
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
    return (this.props.manufacturers.length > 0 || Object.keys(this.props.dummyData).length > 0 ?
        <ManufacturersList
          manufacturers={this.props.manufacturers.length > 0 ? this.props.manufacturers : this.props.dummyData.manufacturers}
          handleDelete={this.handleDelete}
          setProductsFilter={this.props.setProductsFilter}
        />
        : <Loader />
    );
  }
}

const mapStateToProps = state => ({
  manufacturers: state.global.manufacturers,
  dummyData: state.global.dummyData
});

export default connect(
  mapStateToProps,
  {deleteManufacturer, notifySuccess, notifyError, setProductsFilter}
)(ManufacturersListContainer);
