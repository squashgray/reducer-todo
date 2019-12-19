import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import { reducer, initialState } from "./reducer/todoReducer";
import TodoList from "./components/TodoList";

function App() {
  const [todo, dispatch] = useReducer(reducer, initialState);
  console.log(todo);

  return (
    <div className="App">
      <div className="cont">
        <TodoList todo={todo} dispatch={dispatch} />
        <TodoForm todo={todo} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
