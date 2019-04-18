import { NOTIFY_SUCCESS, NOTIFY_ERROR } from "./types";

export const notifySuccess = successMessage => dispatch => {
  console.log("here");

  return dispatch({
    type: NOTIFY_SUCCESS,
    payload: successMessage
  });
};

export const notifyError = errorMessage => dispatch => {
  return dispatch({
    type: NOTIFY_ERROR,
    payload: errorMessage
  });
};
