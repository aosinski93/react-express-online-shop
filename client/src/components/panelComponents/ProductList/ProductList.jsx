import React from "react";
import Loader from "../../commonComponents/Loader/Loader";
import "./productlist.css";
import PanelProductListItem from "../PanelProductListItem/PanelProductListItem";

const ProductList = props => {
  

  const buildList = () => {
    if (props.products !== []) {
      return (
        <ul className="products-list list-group">
          {props.products.map(item => {
            return (
              <PanelProductListItem key={item._id} item={item} onDelete={props.onDelete}/>
            );
          })}
        </ul>
      );
    } else {
      return <p>No products in database</p>;
    }
  };
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
          {props.loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <>{buildList()}</>
          )}
        </div>
      </div>
    );
  }

export default ProductList;
