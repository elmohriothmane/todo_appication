import {
    GET_TODOLIST_TASKS,
    GET_TODOLIST_TASK,
    DELETE_TODOLIST_TASK,
    UPDATE_TODOLIST_TASK
  } from "../actions/types";
  
  const initialState = {
    todolist_tasks: [],
    todolist_task: {}
  };

  
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_TODOLIST_TASKS:
        return {
          ...state,
          todolist_tasks: action.payload
        };
  
      case GET_TODOLIST_TASK:
        return {
          ...state,
          todolist_task: action.payload
        };

        case UPDATE_TODOLIST_TASK:
        return {
          ...state,
          todolist_task: action.payload
        };
  
      case DELETE_TODOLIST_TASK:
        return {
          ...state
  
          // TO_DO
        };
  
      default:
        return state;
    }
  }