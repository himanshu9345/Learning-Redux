import React from "react";
import "./TodoListItem.css";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
      ? "none"
      : "2px solid red"};
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const TodoListItem = ({ todo, onRemovedPressed, markTaskCompleted }) => (
  <TodoItemContainer createdAt={todo.createdAt}>
    <h3>{todo.text}</h3>
    <p>
      Created at: &nbsp;
      {new Date(todo.createdAt).toLocaleDateString()}
    </p>
    <div className="buttons-container">
      {todo.isCompleted ? null : (
        <button
          className="completed-button"
          onClick={() => markTaskCompleted(todo.id)}
        >
          Mark As Completed
        </button>
      )}
      <button
        onClick={() => onRemovedPressed(todo.id)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </TodoItemContainer>
);

export default TodoListItem;
