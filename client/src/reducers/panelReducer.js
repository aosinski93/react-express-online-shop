import {
  FETCH_PANEL_MENU,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  ADD_MENU_ITEM,
  ADD_PRODUCT,
  ADD_MANUFACTURER,
  ADD_MENU_SUBCATEGORY,
  DELETE_PRODUCT,
  DELETE_MANUFACTURER,
  DELETE_MENU_ITEM,
  DELETE_MENU_SUBCATEGORY
} from "../actions/types";

const initialState = {
  menu: [],
  products: [],
  manufacturers: [],
  addedSubcategory: {}
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
    case ADD_MENU_SUBCATEGORY:
      return {
        ...state,
        addedSubcategory:  action.payload
      };


    case DELETE_PRODUCT:
      let productsUpdate = Object.assign([], state.products);
      productsUpdate = productsUpdate.filter(
        product => product._id !== action.payload._id
      );
      return {
        ...state,
        products: productsUpdate
      };
    case DELETE_MANUFACTURER:
      let manufacturesUpdate = Object.assign([], state.manufacturers);
      manufacturesUpdate = manufacturesUpdate.filter(
        manufacturesUpdate => manufacturesUpdate._id !== action.payload._id
      );
      return {
        ...state,
        manufacturers: manufacturesUpdate
      };
    case DELETE_MENU_ITEM:
      let menuItemsUpdate = Object.assign([], state.menu);
      menuItemsUpdate = menuItemsUpdate.filter(
        menuItemsUpdate => menuItemsUpdate._id !== action.payload._id
      );
      return {
        ...state,
        menu: menuItemsUpdate
      };
    case DELETE_MENU_SUBCATEGORY:
    console.log(action.payload);
    
      return {
        ...state
      };
    default:
      return state;
  }
};
