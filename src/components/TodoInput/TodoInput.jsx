import Box from "../UI/Box/Box";
import styles from "./TodoInput.module.css";

import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();

    onAddTodo(title);

    setTitle("");
  };

  const titleChangedHandler = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  return (
    <Box>
      <form onSubmit={addTodoHandler} className={styles.todoForm}>
        <input
          type="text"
          placeholder="Todo..."
          value={title}
          onChange={titleChangedHandler}
        />
        <button type="submit">Add</button>
      </form>
    </Box>
  );
}

export default TodoInput;
