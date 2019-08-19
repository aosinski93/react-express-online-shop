import {
  ADD_TO_CART,
  DEVICE_IS_BEING_ADDED,
  DEVICE_HAS_BEEN_ADDED, UPDATE_CART_QUANTITY
} from '../actions/types';

const initialState = {
  content: [],
  deviceIsBeingAdded: false,
  totalValue: 0
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
    case UPDATE_CART_QUANTITY:

      console.log(action.payload);
      return {
        ...state,
        content: state.content.map(item => {
          if (item._id === action.payload) {
            item.qty++;
            item.subtotal = item.qty * item.price;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
