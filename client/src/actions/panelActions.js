import {
  FETCH_PANEL_MENU,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  ADD_PRODUCT,
  ADD_MANUFACTURER,
  ADD_MENU_ITEM,
  ADD_MENU_SUBCATEGORY
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

export const addCategory = category => dispatch => {
  let url = "/menu";

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify(category)
  })
    .then(res => res.json())
    .then(category => {
      dispatch({
        type: ADD_MENU_ITEM,
        payload: category
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSubcategory = (subcategory, parentId) => dispatch => {
  let url = `/menu/${parentId}/subcategory`;

  fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify(subcategory)
  })
    .then(res => res.json())
    .then(subcategory => {
      dispatch({
        type: ADD_MENU_SUBCATEGORY,
        payload: subcategory
      });
    })
    .catch(err => {
      console.log(err);
    });
};
