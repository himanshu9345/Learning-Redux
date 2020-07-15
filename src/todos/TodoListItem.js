import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovedPressed }) => (
  <div className="todo-item-container">
    <h3>{todo}</h3>
    <div className="buttons-container">
      <button className="completed-button">Mark As Completed</button>
      <button onClick={() => onRemovedPressed(todo)} className="remove-button">
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
