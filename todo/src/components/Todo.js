import React from "react";

function Todo(props) {
  return (
    <div>
      <div
        className={`item${props.item.completed ? " completed" : ""}`}
        onClick={() =>
          props.dispatch({ type: "TOGGLE_COMPLETE", id: props.item.id })
        }
      >
        <p>{props.item.item}</p>
      </div>
    </div>
  );
}

export default Todo;
