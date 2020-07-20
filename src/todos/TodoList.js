import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeToDoRequest, completedTodoRequest } from "./thunks";
import "./TodoList.css";
import { getTodos, getTodosLoading } from "./selectors";
// import { isLoading } from "./reducers";

const TodoList = ({
  todos = [],
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
      {todos.map((todo) => (
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
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovedPressed: (id) => dispatch(removeToDoRequest(id)),
  markTaskCompleted: (id) => dispatch(completedTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
