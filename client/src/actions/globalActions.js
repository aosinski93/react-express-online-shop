import {TOGGLE_DRAWER, NOTIFY_ERROR, DB_ERROR, FETCH_DUMMY_DATA} from './types';
import dummyData from '../dummyData';

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
      if(res.error === true) {
        dispatch({
          type: DB_ERROR,
          payload: res.error
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

export const fetchDummyData = () => dispatch => {
  if(dummyData) {
      dispatch({
          type: FETCH_DUMMY_DATA,
          payload: dummyData
      })
  }

};