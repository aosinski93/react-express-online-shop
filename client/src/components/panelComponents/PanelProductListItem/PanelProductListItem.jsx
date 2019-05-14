import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";

const PanelProductListItem = (props) => {
  return (
    <div
      id={props.item._id}
      className="list-group-item box-shadow product-item"
    >
      <div className="row d-flex align-item-center">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <Link to={`product/${props.item._id}`} className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 text-center">
              <img
                src={`https://www.adam-osinski.com/sites/phone-store/product_images/${
                  props.item.name
                }.jpg`}
                alt={props.item.name}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 text-center">
              <p>{props.item.name}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 text-center">
              <p>
                {props.item.manufacturer &&
                  props.item.manufacturer.name}
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 text-center">
              <p>{props.item.operating_system}</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <DeleteButton
            className="btn btn-danger"
            onClick={props.onDelete}
            title={`Delete ${props.item.name}`}
            dataId={props.item._id}
          />
        </div>
      </div>
    </div>
  );
};

export default PanelProductListItem;
