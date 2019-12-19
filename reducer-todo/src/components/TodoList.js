import React from "react";
import Todo from "./Todo";
import "./Todo.css";

export default function TodoList({ todo, dispatch }) {
  console.log(todo.list);
  return (
    <div className="list">
      <h2>Current Tasks</h2>
      {todo.map(item => (
        <Todo key={item.id} item={item} dispatch={dispatch} />
      ))}
    </div>
  );
}
