import { NOTIFY_SUCCESS, NOTIFY_ERROR } from "../actions/types";

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

    default:
      return state;
  }
};
