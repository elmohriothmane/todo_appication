import { GET_TODOLIST } from "../actions/types";

const initialState = {
  todolists: [],
  todolist: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOLIST:
      return {
        ...state,
        todolists: action.payload
      };
    default:
      return state;
  }
}