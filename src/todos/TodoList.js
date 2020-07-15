import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, markCompleted } from "./actions";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovedPressed, markTaskCompleted }) => (
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovedPressed: (text) => dispatch(removeTodo(text)),
  markTaskCompleted: (text) => dispatch(markCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
