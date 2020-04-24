import { NEW_NOTIFICATION, READ_NOTIFICATION, REFRESH_NOTIFICATION } from '../actions/notification/notificationActions';

const INITIAL_STATE = {
  list:[]
};

const notificationListReducer = (state = INITIAL_STATE, action) => {
  var val ={ ...state, list:action.list }
  let newTaskList = state.data;
  switch (action.type) {
    case NEW_NOTIFICATION:
      const newTask = { title: action.taskName, isFinished: false }
      return { ...state, list: [...newTaskList, newTask] }
    case READ_NOTIFICATION:
      return { ...state, list: action.list };
    case REFRESH_NOTIFICATION:
      return { ...state, list: [] };
  }
  return state;
}

export default notificationListReducer;