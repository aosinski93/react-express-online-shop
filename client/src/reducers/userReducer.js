import {FAKE_LOGIN, FAKE_REGISTER, NEW_USER, USER_LOGIN, USER_LOGOUT} from "../actions/types";

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
    case FAKE_LOGIN:
      return {
        ...state,
        loggedUser: action.payload
      };
    case FAKE_REGISTER:
      return {
        ...state,
        registeredUser: action.payload.newUser
      };
    default:
      return state;
  }
};
