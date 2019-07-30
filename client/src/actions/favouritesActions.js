import {
  DEVICE_IS_BEING_ADDED,
  ADD_TO_FAVOURITES,
  DEVICE_HAS_BEEN_ADDED
} from './types';

const addingToCart = () => dispatch => {
  dispatch({ type: DEVICE_IS_BEING_ADDED });
};

const finishedAddingToCart = () => dispatch => {
  dispatch({ type: DEVICE_HAS_BEEN_ADDED });
};

export const addDeviceToFavourites = id => (dispatch, getState) => {
  dispatch(addingToCart());
  let product = getState().global.products.find(item => item._id === id);

  dispatch({
    type: ADD_TO_FAVOURITES,
    payload: product
  });

  dispatch(finishedAddingToCart());
};
