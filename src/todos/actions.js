// action -> some property and payload
/* 
// below function will be called by some component as createTodo("Some todo")
action creaters
*/
export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
