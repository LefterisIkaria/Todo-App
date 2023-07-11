import Box from "../UI/Box/Box";
import styles from "./TodoInput.module.css";

import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);

  const isTitleValid = title.trim() !== "";

  const addTodoHandler = (event) => {
    event.preventDefault();
    setTitleTouched(true);

    if (!isTitleValid) {
      return;
    }

    onAddTodo(title);

    setTitle("");
    setTitleTouched(false);
  };

  const titleChangedHandler = (event) => setTitle(event.target.value);

  return (
    <Box>
      <form onSubmit={addTodoHandler} className={styles.todoForm}>
        <input
          className={`${styles.todoInput} ${!isTitleValid && titleTouched && styles.invalid}`}
          type="text"
          placeholder="Todo..."
          value={title}
          onChange={titleChangedHandler}
        />
        <button type="submit">Add</button>
      </form>
      <div>{!isTitleValid && titleTouched && <p className={styles.invalid}>You need to give a title!</p>}</div>
    </Box>
  );
}

export default TodoInput;
