import {
  NOTIFY_SUCCESS,
  NOTIFY_ERROR,
  CLEAR_NOTIFICATION
} from "../actions/types";

const initialState = {
  errorMessage: "",
  successMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFY_SUCCESS:
      return {
        errorMessage: "",
        successMessage: action.payload
      };
    case NOTIFY_ERROR:
      return {
        successMessage: "",
        errorMessage: action.payload
      };
    case CLEAR_NOTIFICATION:
      return {
        successMessage: "",
        errorMessage: ""
      };

    default:
      return state;
  }
};
