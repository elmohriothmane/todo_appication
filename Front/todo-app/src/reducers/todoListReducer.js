import { GET_TODOLISTS,GET_TODOLIST,DELETE_TODOLIST } from "../actions/types";

const initialState = {
  todolists: [],
  todolist: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {

  switch (action.type) {
    case GET_TODOLISTS:
      return {
        ...state,
        todolists: action.payload
      };

    case GET_TODOLIST:
        return {
          ...state,
          todolist: action.payload
        };

        case DELETE_TODOLIST:
          return {
            ...state,
            todolists: state.todolists.filter(
              todolist => todolist.id !== action.payload
            )
          };
    default:
      return state;
  }
}