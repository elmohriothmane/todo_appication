import axios from "axios";
import { GET_ERRORS, GET_TODOLIST_TASKS,GET_TODOLIST_TASK,UPDATE_TODOLIST_TASK,DELETE_TODOLIST_TASK, } from "./types";

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

  export const getTaskItem = (
    id,
    history
  ) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8081/api/task/${id}/`);
      dispatch({
        type: GET_TODOLIST_TASK,
        payload: res.data
      });
    } catch (err) {
      history.push("/dashboard");
    }
  };

  export const updateTaskItem = (
    todolistTask,
    
  ) => async dispatch => {
  
      const res = await axios.patch(`http://localhost:8081/api/task/${todolistTask.id}/`,todolistTask);
      dispatch({
        type: UPDATE_TODOLIST_TASK,
        payload: res.data
      });
  };

  export const deleteTask = (taskID) => async dispatch => {
    if (
      window.confirm(
        `You are deleting this task`
      )
    ) {
      await axios.delete(`http://localhost:8081/api/task/${taskID}`);
      dispatch({
        type: DELETE_TODOLIST_TASK,
        payload: taskID
      });
    }
  };