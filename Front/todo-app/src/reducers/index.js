import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import taskReducer from "./taskReducer";
import todoListReducer from "./todoListReducer";


export default combineReducers({
  errors: errorReducer,
  todolist: todoListReducer,
  task:taskReducer
});