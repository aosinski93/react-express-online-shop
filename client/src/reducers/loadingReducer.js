import {
  DEVICE_HAS_BEEN_ADDED,
  DEVICE_IS_BEING_ADDED,
  FETCHING_MANUFACTURERS,
  FETCHING_PRODUCTS, MANUFACTURER_HASS_BEEN_ADDED, MANUFACTURER_IS_BEING_ADDED,
  MANUFACTURERS_FETCHED,
  PRODUCTS_FETCHED
} from "../actions/types";

const initialState = {
  productsFetching: false,
  deviceAdding: false,
  manufacturersFetching: false,
  manufacturerAdding: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        productsFetching: true
      };
    case PRODUCTS_FETCHED:
      return {
        ...state,
        productsFetching: false
      };
    case FETCHING_MANUFACTURERS:
      return {
        ...state,
        manufacturersFetching: true
      };
    case MANUFACTURERS_FETCHED:
      return {
        ...state,
        manufacturersFetching: false
      };
    case DEVICE_IS_BEING_ADDED:
      return {
        ...state,
        deviceAdding: true
      };
    case DEVICE_HAS_BEEN_ADDED:
      return {
        ...state,
        deviceAdding: false
      };
    case MANUFACTURER_IS_BEING_ADDED:
      return {
        ...state,
        manufacturerAdding: true
      };
    case MANUFACTURER_HASS_BEEN_ADDED:
      return {
        ...state,
        manufacturerAdding: false
      };
    default:
      return initialState;
  }
}