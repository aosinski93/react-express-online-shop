import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import "./manufacturerlist.css";

const ManufacturersList = props => {
  if (props.manufacturers.length !== 0) {
    return (
      <div className="manufacturer-list-wrapper col-lg-6 col-md-6">
        <ul className="list-group mt-4">
          {props.manufacturers.map(item => {
            return (
              <li
                key={item._id}
                id={item._id}
                className="list-group-item box-shadow manufacturer-item"
                onClick={() => props.setProductsFilter(item.name)}
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
                    <p>Products: {item.products.length}</p>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <DeleteButton
                      type="submit"
                      className="btn btn-danger"
                      onClick={props.handleDelete}
                      dataId={item._id}
                      title={`Delete ${item.name}`}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="col-lg-6 col-md-6">
        <p>No manufacturers</p>
      </div>
    );
  }
};
export default ManufacturersList;
