import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteManufacturer } from "../../../actions/panelActions";
import {
  notifySuccess,
  notifyError
} from "../../../actions/notificationsActions";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import "./manufacturerlist.css";

class ManufacturersList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  handleDelete = e => {
    e.preventDefault();
    try {
      this.props.deleteManufacturer(e.target.dataset.id);
    } catch (err) {
      console.error(err);
      this.props.notifyError("Something went wrong");
    } finally {
      this.props.notifySuccess(`Successfully deleted manufacturer`);
    }
  };

  buildList = () => {
    if (this.props.data !== []) {
      return (
        <ul className="list-group mt-4">
          {this.props.data.map(item => {
            return (
              <li
                key={item._id}
                id={item._id}
                className="list-group-item box-shadow manufacturer-item"
              >
                <Link
                  to={`products/${item.name}`}
                  className="row d-flex align-items-center"
                  title={`Show all ${item.name}'s products`}
                >
                  <div className="col">
                    <p className="manufacturer-name mb-0">{item.name}</p>
                  </div>
                  <div className="col">
                    <p>{item.products.length}</p>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <DeleteButton
                      type="submit"
                      className="btn btn-danger"
                      onClick={this.handleDelete}
                      dataId={item._id}
                      title={`Delete ${item.name}`}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>No manufacturers</p>;
    }
  };

  render() {
    return (
      <div className="manufacturers-list-wrapper col-lg-6">
        {this.buildList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  manufacturers: state.panel.manufacturers
});

export default connect(
  mapStateToProps,
  { deleteManufacturer, notifySuccess, notifyError }
)(ManufacturersList);
