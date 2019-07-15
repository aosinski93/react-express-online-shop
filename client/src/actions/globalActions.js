import {
  TOGGLE_DRAWER,
  NOTIFY_ERROR,
  DB_ERROR,
  // FETCH_DUMMY_DATA,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  NOTIFY_SUCCESS, FETCH_HOT_DEALS
} from './types';
import dummyData from '../dummyData';

export const toggleDrawer = () => dispatch => {
  return dispatch({
    type: TOGGLE_DRAWER
  });
};

export const checkConnection = () => dispatch => {
  fetch('/api/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.error === true) {
        dispatch({
          type: DB_ERROR,
          payload: res.error
        });
        dispatch({
          type: NOTIFY_ERROR,
          payload: 'Database connection error'
        })
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DB_ERROR,
        payload: true
      });
    });
};
export const fetchProducts = () => dispatch => {
  let url = '/products';
  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(fetchedProducts => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: fetchedProducts
      });
    })
    .then(() => {
      dispatch({
        type: FETCH_HOT_DEALS
      })
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'Products fetched'
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload:  `Error when fetching products: ${err.message}`
      })
    });
};

export const fetchManufacturers = () => dispatch => {
  let url = '/manufacturers';
  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(fetchedManufacturers => {
      dispatch({
        type: FETCH_MANUFACTURERS,
        payload: fetchedManufacturers
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'Manufacturers fetched'
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};
export const fetchDummyData = () => dispatch => {
  if (dummyData) {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: dummyData.products
    });
    dispatch({
      type: FETCH_MANUFACTURERS,
      payload: dummyData.manufacturers
    })
  }

};