import {
  FETCH_PANEL_MENU,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  ADD_PRODUCT,
  ADD_MANUFACTURER
} from "./types";

export const fetchPanelMenu = () => dispatch => {
  let url = "/admin";
  fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(fetchedMenu => {
      dispatch({
        type: FETCH_PANEL_MENU,
        payload: fetchedMenu
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchPanelProducts = () => dispatch => {
  let url = "/products";
  fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(fetchedProducts => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: fetchedProducts
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const fetchPanelManufacturers = () => dispatch => {
  let url = "/maufacturers";
  fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(fetchedManufacturers => {
      dispatch({
        type: FETCH_MANUFACTURERS,
        payload: fetchedManufacturers
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addProduct = product => dispatch => {
  let url = "/product";
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify(product)
      .then(res => res.json())
      .then(product => {
        dispatch({
          type: ADD_PRODUCT,
          payload: product
        });
      })
      .catch(err => {
        console.log(err);
      })
  });
};

export const addManufacturer = manufacturer => dispatch => {
  let url = "/manufacturer";
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify(manufacturer)
      .then(res => res.json())
      .then(product => {
        dispatch({
          type: ADD_MANUFACTURER,
          payload: manufacturer
        });
      })
      .catch(err => {
        console.log(err);
      })
  });
};
