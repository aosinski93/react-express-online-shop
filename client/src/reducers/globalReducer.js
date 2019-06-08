import { TOGGLE_DRAWER } from "../actions/types";

const initialState = {
  drawerIsVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        drawerIsVisible: !state.drawerIsVisible
      };

    default:
      return state;
  }
};
