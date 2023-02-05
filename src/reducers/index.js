/** Importing required action types */
import {ADD_TASK, DELETE_TASK, MODIFY_TASK} from '../actions';

// initial state of reducer
const initialState = {
  taskState:[],
  completeTaskState:[],
  loading:false,
  error: null,
}

// task reducer created
function taskReducer(state = initialState, action){
  switch(action.type){
    case ADD_TASK:
      return (
        {
          ...state,
          taskState:[...state.taskState, action.task]
        }
      )
    case MODIFY_TASK:
      return({
        ...state,
      })
    case DELETE_TASK:
      return({
        ...state,
      })
    default:
      return (
        {
        state,
      })
  }
}

export default taskReducer;