import {
  FETCH_PANEL_MENU,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  ADD_MENU_ITEM,
  ADD_PRODUCT,
  ADD_MANUFACTURER
} from "../actions/types";

const initialState = {
  menu: [],
  products: [],
  manufacturers: []
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

    case FETCH_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case ADD_MANUFACTURER:
      return {
        ...state,
        manufacturers: [...state.manufacturers, action.payload]
      };
    case ADD_MENU_ITEM:
      return {
        ...state,
        menu: [...state.menu, action.payload]
      };
    default:
      return state;
  }
};
