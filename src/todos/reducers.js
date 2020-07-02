/*
reducers -> is  a function incharge of managing
any action fired from the application reducers will be called,
 
*/
import { CREATE_TODO, REMOVE_TODO } from "./actions";
export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newToDo = {
        text,
        isCompleted: false,
      };
      return state.concat(text);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
