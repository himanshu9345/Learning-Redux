/*
reducers -> is  a function incharge of managing
any action fired from the application, reducers will be called,
 
*/
import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }
    case MARK_COMPLETED: {
      console.log("Hello");
      const { todo: completedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id == completedTodo.id) {
            return { ...todo, isCompleted: true };
          }
          return todo;
        }),
      };
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
