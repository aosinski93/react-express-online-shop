import { NEW_USER, USER_LOGOUT, USER_LOGIN, NOTIFY_ERROR, NOTIFY_SUCCESS, TOGGLE_ADMIN } from "./types";


export const newUser = userData => dispatch => {
  fetch("/users/register", {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: NEW_USER,
        payload: user
      })
    )
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'Successful registration'
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    })
};


export const userLogin = (path, user) => dispatch => {

  let url = path ? `${path}/user/login` : '/user/login' ;
  
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(loggedUser => {
      if(loggedUser.user) {
        dispatch({
          type: USER_LOGIN,
          payload: loggedUser.user
        });
      }
      else {
        dispatch({
          type: NOTIFY_ERROR,
          payload: loggedUser.msg
        })
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const userLogout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
};


export const toggleAdmin = (id) => dispatch => {
  dispatch({
    type: TOGGLE_ADMIN,
    payload: id
  })
}