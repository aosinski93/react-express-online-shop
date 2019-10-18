import {
  DEVICE_IS_BEING_ADDED,
  ADD_TO_CART,
  DEVICE_HAS_BEEN_ADDED, NOTIFY_SUCCESS, REMOVE_FROM_CART, INCREASE_CART_QUANTITY, DECREASE_CART_QUANTITY
} from './types';

const addingToCart = () => dispatch => {
  dispatch({type: DEVICE_IS_BEING_ADDED});
};

const finishedAddingToCart = () => dispatch => {
  dispatch({type: DEVICE_HAS_BEEN_ADDED});
};

export const addDeviceToCart = (id, qty) => (dispatch, getState) => {
  dispatch(addingToCart());
  let {name, price, slug, _id} = getState().global.products.find(
    item => item._id === id
  );
  let isInCart = getState().cart.content.find(item => item._id === _id);

  if (!isInCart) {
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
    dispatch(increaseCartQty(id));
  }
  dispatch(finishedAddingToCart());
};

export const removeDeviceFromCart = (id) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })
};
export const increaseCartQty = (id) => (dispatch, getState) => {
  let {name} = getState().global.products.find(
    item => item._id === id
  );
  dispatch({
    type: INCREASE_CART_QUANTITY,
    payload: id
  });
  dispatch({
    type: NOTIFY_SUCCESS,
    payload: `${name} added to cart!`
  })
};

export const decreaseCartQty = (id) => (dispatch, getState) => {
  let item = getState().cart.content.find(item => (item._id === id));
  if (item.qty === 1) {
    return dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    })
  }

  dispatch({
    type: DECREASE_CART_QUANTITY,
    payload: id
  })
};