import axios from "axios";

export const addTaskToTodoLIst = (todolistId,todolistTask, history) => async dispatch => {

      await axios.post(`http://localhost:8081/api/task/${todolistId}`, todolistTask);
      return window.location.href = `/projectBoard/${todolistId}`
         
  };