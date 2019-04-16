import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteManufacturer } from "../../../actions/panelActions";
// import Loader from "../../commonComponents/Loader/Loader";

class ManufacturersList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.data !== []) {
      this.setState({
        loading: false
      });
    }
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteManufacturer(e.target.dataset.id);
  };

  buildList = () => {
    if (this.props.data !== []) {
      return (
        <ul className="list-group">
          {this.props.data.map(item => {
            return (
              <li key={item._id} id={item._id} className="list-group-item">
                <Link to={`products/${item.name}`} className="row">
                  <div className="col">
                    <p>{item.name}</p>
                  </div>
                  <div className="col">
                    <p>{item.products.lenght}</p>
                  </div>
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={this.handleDelete}
                      data-id={item._id}
                    >
                      &times;
                    </button>
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
        {/* {this.state.loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          this.buildList()
        )} */}
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
  { deleteManufacturer }
)(ManufacturersList);
