import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../commonComponents/Loader/Loader";
import "./productlist.css";
import { deleteProduct } from "../../../actions/panelActions";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";

class ProductList extends Component {
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

  onDelete = e => {
    e.preventDefault();
    this.props.deleteProduct(e.target.dataset.id);
  };

  buildList = () => {
    if (this.props.data !== []) {
      return (
        <ul className="products-list list-group">
          {this.props.data.map(item => {
            return (
              <li
                key={item._id}
                id={item._id}
                className="list-group-item box-shadow product-item"
              >
                <div className="row d-flex align-item-center">
                  <div className="col-lg-10 col-md-10 col-sm-10">
                    <Link to={`product/${item._id}`} className="row">
                      <div className="col-lg-3 col-md-3 col-sm-3 text-center" />
                      <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <p>{item.name}</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <p>{item.manufacturer && item.manufacturer.name}</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <p>{item.operating_system}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <DeleteButton
                      className="btn btn-danger"
                      onClick={this.onDelete}
                      title={`Delete ${item.name}`}
                      dataId={item._id}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>No products in database</p>;
    }
  };
  render() {
    return (
      <div className="row">
        <div className="top-labels container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-lg-3 col-sm-3 co-md-3 text-center">
                  Image
                </div>
                <div className="col-lg-3 col-sm-3 co-md-3 text-center">
                  Name
                </div>
                <div className="col-lg-3 col-sm-3 co-md-3 text-center">
                  Manufacturer
                </div>
                <div className="col-lg-3 col-sm-3 co-md-3 text-center">OS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {this.state.loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <>{this.buildList()}</>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.panel.products
});

export default connect(
  mapStateToProps,
  { deleteProduct }
)(ProductList);
