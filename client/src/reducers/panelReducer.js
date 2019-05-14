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
  addedSubcategory: {},
  chosenManufacturer: ""
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
        products: [...state.products, action.payload],
        addedSubcategory: {}
      };

    case ADD_MANUFACTURER:
      return {
        ...state,
        manufacturers: [...state.manufacturers, action.payload],
        addedSubcategory: {}
      };
    case ADD_MENU_ITEM:
      return {
        ...state,
        menu: [...state.menu, action.payload],
        addedSubcategory: {}
      };
    case ADD_MENU_SUBCATEGORY:
      return {
        ...state,
        addedSubcategory:  action.payload,
      };
    case DELETE_PRODUCT:
      let productsUpdate = Object.assign([], state.products);
      productsUpdate = productsUpdate.filter(
        product => product._id !== action.payload._id
      );
      return {
        ...state,
        products: productsUpdate,
        addedSubcategory: {}
      };
    case DELETE_MANUFACTURER:
      let manufacturesUpdate = Object.assign([], state.manufacturers);
      manufacturesUpdate = manufacturesUpdate.filter(
        manufacturesUpdate => manufacturesUpdate._id !== action.payload._id
      );
      return {
        ...state,
        manufacturers: manufacturesUpdate,
        addedSubcategory: {}
      };
    case DELETE_MENU_ITEM:
      let menuItemsUpdate = Object.assign([], state.menu);

      menuItemsUpdate = menuItemsUpdate.filter(
        menuItem => menuItem._id !== action.payload._id
      );
      return {
        ...state,
        menu: menuItemsUpdate,
        addedSubcategory: {}
      };
    case DELETE_MENU_SUBCATEGORY:
      let menu = Object.assign([], state.menu);      
      
      let newMenu = menu.map(menuItem => {
        if(menuItem._id === action.payload.parentId) {
          menuItem.subcategories = menuItem.subcategories.filter(subcategory => subcategory._id !== action.payload._id)
        }
        return menuItem
      })
      
      
      return {
        ...state,
        menu: newMenu,
        addedSubcategory: {}
      };
    default:
      return state;
  }
};
