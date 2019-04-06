import { FETCH_MENU, FETCH_PRODUCTS } from "./types";

export const fetchPanelMenu = () => dispatch => {
  let url = "/admin";
  fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(fetchedMenu => {
      dispatch({
        type: FETCH_MENU,
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
