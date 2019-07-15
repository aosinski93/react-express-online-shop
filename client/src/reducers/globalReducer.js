import {
  TOGGLE_DRAWER,
  DB_ERROR,
  FETCH_DUMMY_DATA,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  ADD_PRODUCT, ADD_MANUFACTURER, DELETE_PRODUCT, DELETE_MANUFACTURER, FETCH_HOT_DEALS
} from "../actions/types";

const initialState = {
  manufacturers: [],
  products: [],
  hotDeals: [],
  drawerIsVisible: false,
  dbError: '',
  dummyData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_HOT_DEALS: {
      if(state.products.length >= 2) {
        return {
          ...state,
          hotDeals: [state.products[0], state.products[1]]
        }
      }
      return state;
    }
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
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsVisible: !state.drawerIsVisible
      };
    case DB_ERROR:
      return {
        ...state,
        dbError: true
      };
    case FETCH_DUMMY_DATA:
      return {
        ...state,
        dummyData: action.payload
      }
    default:
      return state;
  }
};
