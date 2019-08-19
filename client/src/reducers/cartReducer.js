import {
  ADD_TO_CART,
  DEVICE_IS_BEING_ADDED,
  DEVICE_HAS_BEEN_ADDED
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
      let isInCart = state.content.find(item => item._id === action.payload._id);

      if (!isInCart) {
        return {
          ...state,
          content: [...state.content, action.payload]
        };
      } else {
        return {
          ...state,
          content: state.content.map(item => {
            if (item._id === action.payload._id) {
              item.qty++;
              item.subtotal = item.qty * item.price;
            }
            return item;
          })
        };
      }

    default:
      return state;
  }
};
