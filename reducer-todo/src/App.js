import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import { reducer, initialState } from "./reducer/todoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
