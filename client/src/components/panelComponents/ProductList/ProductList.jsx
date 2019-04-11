import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../../commonComponents/Loader/Loader";

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
  };

  buildList = () => {
    if (this.props.data !== []) {
      return (
        <ul className="productsList" style={{ padding: 20 + "px" }}>
          {this.props.data.map(item => {
            return (
              <li
                key={item._id}
                id={item._id}
                className="flex v-align productItem"
              >
                <Link
                  to={`product/${item._id}`}
                  className="col-lg-12 flex v-align"
                >
                  <div className="col-lg-2">{item.name}</div>
                  <div className="col-lg-2">
                    Battery capacity: {item.battery} mAh
                  </div>
                  <div className="col-lg-2">
                    Manufacturer: {item.manufacturer.name.toUpperCase()}
                  </div>
                  <div className="col-lg-2">OS: {item.operating_system}</div>
                  <div className="col-lg-1" />
                  <div className="col-lg-1" />
                </Link>
                <button
                  className="dataSubmit deleteDataButton"
                  onClick={e => this.onDelete(e)}
                  title="Delete submenu"
                >
                  &times;
                </button>
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
      <div className="productListWrapper">
        {this.state.loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          this.buildList()
        )}
      </div>
    );
  }
}

export default ProductList;
