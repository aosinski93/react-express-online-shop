import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../commonComponents/Loader/Loader";
import "./productlist.css";
import { deleteProduct } from "../../../actions/panelActions";

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
        <div className="container">
          <ul className="productsList list-group">
            {this.props.data.map(item => {
              return (
                <li
                  key={item._id}
                  id={item._id}
                  className="list-group-item box-shadow product-item"
                >
                  <div className="row d-flex align-item-center">
                    <div className="col-lg-10">
                      <Link to={`product/${item._id}`} className="row ">
                        <div className="col-lg-3" />
                        <div className="col-lg-3">
                          <p>{item.name}</p>
                        </div>
                        <div className="col-lg-3">
                          {/* <p>{item.manufacturer.name.toUpperCase()}</p> */}
                        </div>
                        <div className="col-lg-3">
                          <p>{item.operating_system}</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-2">
                      <button
                        className="btn btn-danger"
                        onClick={e => this.onDelete(e)}
                        title="Delete submenu"
                        data-id={item._id}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No products in database</p>;
    }
  };
  render() {
    return (
      <div className="productListWrapper col-lg-10">
        <div className="topLabels container">
          <div className="row">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-3 text-center">Image</div>
                <div className="col-lg-3 text-center">Name</div>
                <div className="col-lg-3 text-center">Manufacturer</div>
                <div className="col-lg-3 text-center">OS</div>
              </div>
            </div>
          </div>
        </div>
        {this.state.loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>{this.buildList()}</div>
        )}
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
