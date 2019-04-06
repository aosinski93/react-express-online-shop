import {
  FETCH_PANEL_MENU,
  FETCH_PRODUCTS,
  FECTH_MANUFACTURERS,
  ADD_PRODUCT,
  ADD_MANUFACTURER
} from "../actions/types";

const initialState = {
  menu: [],
  products: [],
  manufacturers: [],
  addedMenuItem: {},
  addedProduct: {},
  addedManufacturer: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PANEL_MENU:
      return {
        ...state,
        menu: action.payload
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FECTH_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addedProduct: [...action.payload]
      };
    case ADD_MANUFACTURER:
      return {
        ...state,
        addedManufacturer: [...action.payload]
      };

    default:
      return state;
  }
};
