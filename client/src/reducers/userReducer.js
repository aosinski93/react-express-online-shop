import { NEW_USER, FETCH_USER, USER_LOGOUT } from "../actions/types";

const initialState = {
  registeredUser: {},
  loggedUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loggedUser: action.payload
      };
    case NEW_USER:
      return {
        ...state,
        registeredUser: action.payload
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
