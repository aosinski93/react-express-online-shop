import {
  ADD_TO_CART,
  DEVICE_IS_BEING_ADDED,
  DEVICE_HAS_BEEN_ADDED,
  REMOVE_FROM_CART,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY
} from '../actions/types';

const initialState = {
  content: [],
  deviceIsBeingAdded: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case DEVICE_IS_BEING_ADDED:
      return {
        ...state,
        deviceIsBeingAdded: true
      };
    case DEVICE_HAS_BEEN_ADDED:
      return {
        ...state,
        deviceIsBeingAdded: false
      };
    case ADD_TO_CART:
      return {
        ...state,
        content: [...state.content, action.payload]
      };
    case INCREASE_CART_QUANTITY:
      return {
        ...state,
        content: state.content.map(item => {
          if (item._id === action.payload) {
            return {...item, qty: item.qty + 1, subtotal: (item.qty + 1) * item.price}
          }
          return item;
        })
      };
    case DECREASE_CART_QUANTITY:
      return {
        ...state,
        content: state.content.map(item => {
          if (item._id === action.payload) {
            return {...item, qty: item.qty - 1, subtotal: (item.qty - 1) * item.price}
          }
          return item;
        })
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter(item => item._id !== action.payload)
      };
    default:
      return state;
  }
};
