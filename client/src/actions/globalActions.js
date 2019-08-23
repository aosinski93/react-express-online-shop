import {
  TOGGLE_DRAWER,
  NOTIFY_ERROR,
  DB_ERROR,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  FETCH_HOT_DEALS,
  FETCHING_PRODUCTS,
  PRODUCTS_FETCHED,
  FETCHING_MANUFACTURERS,
  MANUFACTURERS_FETCHED
} from './types';
import dummyData from '../dummyData';

export const toggleDrawer = () => dispatch => {
  return dispatch({
    type: TOGGLE_DRAWER
  });
};

export const checkConnection = () => dispatch => new Promise((resolve, reject) => {
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
      resolve();
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DB_ERROR,
        payload: true
      });
    });
});
export const fetchProducts = () => dispatch => {
  dispatch({
    type: FETCHING_PRODUCTS
  });

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
        type: PRODUCTS_FETCHED
      })
    })
    .then(() => {
      dispatch({
        type: FETCH_HOT_DEALS
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: `Error when fetching products: ${err.message}`
      })
    });
};

export const fetchManufacturers = () => dispatch => {
  dispatch({
    type: FETCHING_MANUFACTURERS
  });

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
        type: MANUFACTURERS_FETCHED
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
    let products = new Promise((resolve, reject) => {
      resolve(
        dispatch({
          type: FETCH_PRODUCTS,
          payload: dummyData.products
        })
      );
      reject(new Error('Products not fetched'))
    });
    products.then(() => {
      dispatch({
        type: FETCH_HOT_DEALS
      })
    });

    dispatch({
      type: FETCH_MANUFACTURERS,
      payload: dummyData.manufacturers
    })
  }

};