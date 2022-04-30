import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import todoListReducer from "./todoListReducer";


export default combineReducers({
  errors: errorReducer,
  todolist: todoListReducer
});