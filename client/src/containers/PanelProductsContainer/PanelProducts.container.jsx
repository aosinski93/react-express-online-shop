import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPanelProducts,
  fetchPanelManufacturers
} from '../../actions/panelActions';
import PanelProducts from "../../components/panelComponents/PanelProducts/PanelProducts";


class PanelProductsContainer extends Component {
    componentWillMount = () => {
        this.props.fetchPanelProducts();
      };
    
      onSubmit = e => {
        e.preventDefault();
      };

      render() {
          return <PanelProducts products={this.props.products} onSubmit={this.onSubmit} />
      }
}

const mapStateToProps = state => ({
    products: state.panel.products
  });
  
  export default connect(
    mapStateToProps,
    { fetchPanelProducts, fetchPanelManufacturers }
  )(PanelProductsContainer);
  