import { NOTIFY_SUCCESS, NOTIFY_ERROR, CLEAR_NOTIFICATION } from "./types";

export const notifySuccess = successMessage => dispatch => {
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

export const clearNotification = () => dispatch => {
  return dispatch({
    type: CLEAR_NOTIFICATION
  });
};
