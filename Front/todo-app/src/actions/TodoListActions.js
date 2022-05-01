import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_TODOLISTS,GET_TODOLIST,DELETE_TODOLIST } from "./types";



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
    type: GET_TODOLISTS,
    payload: res.data
  });
};

export const getTodoList = (id) => async dispatch => {
  const res = await axios.get(`http://localhost:8081/api/todolist/${id}`);
  
  dispatch({
    type: GET_TODOLIST,
    payload: res.data
  });
};

export const deleteTodoList = id => async dispatch => {
  if(
    window.confirm("Are you sure you want to delete this list ?")
  ){
    await axios.delete(`http://localhost:8081/api/todolist/${id}`);
    dispatch({
      type: DELETE_TODOLIST,
      payload: id
    });
  }
  
};