import { INIT_MENU, DISCONNECT_SUCCESS } from './types';
import { userDisconnect } from '../services/user';

export const initMenu = () => {
  return { type: INIT_MENU };
};

export const userLogout = () => {
  return dispatch => {
    return userDisconnect().then(() => {
      dispatch({ type: DISCONNECT_SUCCESS })
    });
  };
};
