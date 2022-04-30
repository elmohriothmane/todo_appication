import axios from "axios";
import { GET_ERRORS } from "./types";



export const createProject = (todolist, history) => async dispatch => {


  try {

    console.log(todolist);
    const res = await axios.post("http://localhost:8081/api/todolist", todolist);
    return window.location.href = '/dashboard'
    
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};