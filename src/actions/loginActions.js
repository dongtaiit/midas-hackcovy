import { INIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERROR, LOGIN_TWOFA_SUCCESS } from './types';
import { userConnect,userConnectWithTouch } from '../services/user';

export const initLogin = () => {
  return { type: INIT_LOGIN };
};
export const clearError = () => {
  return { type: CLEAR_ERROR };
};

export const userLogin = ({ userPhone, userPassword }) => {
  return dispatch => {
    return userConnect(userPhone, userPassword)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => loginFail(dispatch, error));
  };
};
export const userLoginTouchID = (status) => {
  return dispatch => {
    return userConnectWithTouch(status) 
    .then(user => loginSuccess(dispatch, user))
    .catch(error => loginFail(dispatch, error));
  };
}

export const validateError = (err) => {
  return dispatch => {
    return loginFail(dispatch, err)
  };
}
const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error
  });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
};
