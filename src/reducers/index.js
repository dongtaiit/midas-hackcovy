import { combineReducers } from 'redux';
import login from './loginReducer';
import menu from './menuReducer';
import navigation from './navigation'

export default combineReducers({
  navigation,
  login,
  menu,
});

