import {
  NEW_USER,
  USER_LOGOUT,
  USER_LOGIN,
  NOTIFY_ERROR,
  NOTIFY_SUCCESS,
  TOGGLE_ADMIN, FAKE_LOGIN, FAKE_REGISTER
} from './types';

export const newUser = userData => dispatch => {
  fetch('/users/register', {
    method: 'POST',
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
        payload: 'Successful registration, now you can log in using given credentials'
      });
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      });
    });
};

export const userLogin = (path, user) => dispatch => {
  let url = path ? `${path}/user/login` : '/user/login';

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(loggedUser => {
      if (loggedUser.user) {
        dispatch(
          {
            type: USER_LOGIN,
            payload: loggedUser.user
          },
        );
        dispatch({
          type: NOTIFY_SUCCESS,
          payload: 'Successfull login'
        })
      } else {
        dispatch({
          type: NOTIFY_ERROR,
          payload: loggedUser.msg
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.msg
      });
    });
};

export const userLogout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
};

export const toggleAdmin = id => dispatch => {
  dispatch({
    type: TOGGLE_ADMIN,
    payload: id
  });
};

export const fakeLogin = (user) => dispatch => {
  dispatch({
    type: FAKE_LOGIN,
    payload: user
  })
};


export const fakeRegister = (user) => dispatch => {
  dispatch({
    type: FAKE_REGISTER,
    payload: user
  });
  dispatch({
    type: NOTIFY_SUCCESS,
    payload: 'Successful registration, now you can log in using given credentials'
  });
};