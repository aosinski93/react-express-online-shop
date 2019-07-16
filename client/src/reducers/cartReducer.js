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
      return {
        ...state,
        content: [...state.content, action.payload]
      };
    default:
      return state;
  }
};
