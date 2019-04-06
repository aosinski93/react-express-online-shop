import { NEW_USER, FETCH_USER, USER_LOGOUT } from "./types";

// a'la login

export const fetchUser = user => dispatch => {
  let url = "/users/login";
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
      dispatch({
        type: FETCH_USER,
        payload: loggedUser.user
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// register

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

export const userLogout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
};
