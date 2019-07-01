import { TOGGLE_DRAWER, NOTIFY_ERROR, DB_ERROR } from './types';

export const toggleDrawer = () => dispatch => {
  return dispatch({
    type: TOGGLE_DRAWER
  });
};

export const checkConnection = () => dispatch => {
  fetch('/api/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      if(res.msg === true) {
        dispatch({
          type: DB_ERROR,
          payload: res.msg
        });
        dispatch({
          type: NOTIFY_ERROR,
          payload: 'Database connection error'
        })
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: NOTIFY_ERROR,
        payload: err
      });
    });
};
