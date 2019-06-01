import { NEW_USER, USER_LOGOUT, USER_LOGIN, NOTIFY_ERROR } from "./types";


export const newUser = userData => dispatch => {
  fetch("/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: NEW_USER,
        payload: user
      })
    );
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
