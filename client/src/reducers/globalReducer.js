import { TOGGLE_DRAWER, DB_ERROR } from "../actions/types";

const initialState = {
  drawerIsVisible: false,
  dbError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsVisible: !state.drawerIsVisible
      };
      case DB_ERROR: 
      return {
        ...state,
        dbError: true
      }
    default:
      return state;
  }
};
