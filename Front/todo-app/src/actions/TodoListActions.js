import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_TODOLIST } from "./types";



export const createProject = (todolist, history) => async dispatch => {


  try {

    console.log(todolist);
    const res = await axios.post("http://localhost:8081/api/todolist", todolist);
    return window.location.href = '/dashboard'
    
  } catch (err) {

    console.log(err)
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getTodoLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/todolist/alltodolists");
  dispatch({
    type: GET_TODOLIST,
    payload: res.data
  });
};