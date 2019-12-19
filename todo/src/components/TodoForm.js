import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  inputer: {
    background: "white"
  }
});

export default function ToDoForm({ dispatch }) {
  const classes = useStyles();
  const [newTodoText, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setTodo("");
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.input}>
        <Input
          type="text"
          name="'newTodoText"
          placeholder="Next Todo"
          inputProps={{
            "aria-label": "description"
          }}
          value={newTodoText}
          onChange={handleChange}
        />
        <Button
          type="submit"
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodoText })}
          variant="contained"
        >
          Add Task
        </Button>
        <Button
          type="submit"
          className="clear"
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "CLEAR_COMPLETE" })}
        >
          Clear Completed
        </Button>
      </div>
    </form>
  );
}
