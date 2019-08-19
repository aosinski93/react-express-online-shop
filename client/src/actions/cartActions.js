import {
  DEVICE_IS_BEING_ADDED,
  ADD_TO_CART,
  DEVICE_HAS_BEEN_ADDED
} from './types';

const addingToCart = () => dispatch => {
  dispatch({ type: DEVICE_IS_BEING_ADDED });
};

const finishedAddingToCart = () => dispatch => {
  dispatch({ type: DEVICE_HAS_BEEN_ADDED });
};

export const addDeviceToCart = (id, qty) => (dispatch, getState) => {
  dispatch(addingToCart());
  let { name, price, slug, _id } = getState().global.products.find(
    item => item._id === id
  );

  let productToCart = {
    _id,
    name,
    price,
    slug,
    qty: 1,
    subtotal: price * qty
  };

  dispatch({
    type: ADD_TO_CART,
    payload: productToCart
  });

  dispatch(finishedAddingToCart());
};
