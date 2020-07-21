import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeToDoRequest, completedTodoRequest } from "./thunks";
import "./TodoList.css";
import {
  getTodos,
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";
// import { isLoading } from "./reducers";

const TodoList = ({
  completedTodo,
  incompleteTodos,
  onRemovedPressed,
  markTaskCompleted,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading Todos ... </div>;

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Imcomplete:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovedPressed={onRemovedPressed}
          markTaskCompleted={markTaskCompleted}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodo.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovedPressed={onRemovedPressed}
          markTaskCompleted={markTaskCompleted}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  completedTodo: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovedPressed: (id) => dispatch(removeToDoRequest(id)),
  markTaskCompleted: (id) => dispatch(completedTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
