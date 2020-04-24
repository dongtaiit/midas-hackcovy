import { INIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERROR, LOGIN_TWOFA_SUCCESS ,VALIDATE_PHONE_FAIL} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_LOGIN:
      return { ...state, ...INITIAL_STATE };
    case CLEAR_ERROR:
      return { ...state, error: '' }
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_TWOFA_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, ...INITIAL_STATE, error: action.payload };
    case VALIDATE_PHONE_FAIL:
      return { ...state, ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};
