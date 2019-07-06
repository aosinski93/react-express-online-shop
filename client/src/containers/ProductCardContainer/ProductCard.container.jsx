import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/commonComponents/ProductCard/ProductCard';
import Loader from '../../components/commonComponents/Loader/Loader';

class ProductCardContainer extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.product !== nextProps.product;
    }


    render() {
        return (
            <>
                {this.props.product !== undefined ? <ProductCard data={this.props.product} isInAdmin={this.props.match.path.indexOf('admin') !== -1} /> : <Loader />}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    product: state.global.products.find(
       item => item.slug === ownProps.match.params.slug
    )

});

export default connect(
    mapStateToProps,
    null
)(ProductCardContainer);