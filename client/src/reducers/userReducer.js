import { NEW_USER, USER_LOGIN, USER_LOGOUT } from "../actions/types";

const initialState = {
  registeredUser: {},
  loggedUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        registeredUser: action.payload
      };
    case USER_LOGIN:
      return {
        ...state,
        loggedUser: action.payload
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
