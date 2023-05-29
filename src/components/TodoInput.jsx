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
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Todo..."
        value={title}
        onChange={titleChangedHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
