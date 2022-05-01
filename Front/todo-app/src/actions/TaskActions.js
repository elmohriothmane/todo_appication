import axios from "axios";
import { GET_ERRORS, GET_TODOLIST_TASKS } from "./types";

export const addTaskToTodoLIst = (todolistId,todolistTask, history) => async dispatch => {

      await axios.post(`http://localhost:8081/api/task/${todolistId}`, todolistTask);
      return window.location.href = `/projectBoard/${todolistId}`
         
  }

  export const getTasks = todolist_id => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8081/api/todolist/${todolist_id}/tasks`);
      dispatch({
        type: GET_TODOLIST_TASKS,
        payload: res.data
      });
    } catch (err) {}
  };