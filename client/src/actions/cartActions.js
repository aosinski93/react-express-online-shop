import {
  DEVICE_IS_BEING_ADDED,
  ADD_TO_CART,
  DEVICE_HAS_BEEN_ADDED, UPDATE_CART_QUANTITY, NOTIFY_SUCCESS, REMOVE_FROM_CART
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
  let isInCart = getState().cart.content.find(item => item._id === _id);

  if(!isInCart) {
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
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: `${name} added to cart!`
    })
  } else {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: _id
    })
  }
  dispatch(finishedAddingToCart());
};

export const removeDeviceFromCart = (id) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })
}