import { useState } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const dummy = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Study" },
];

function App() {
  const [todos, setTodos] = useState(dummy);

  const addTodoHandler = (title) => {
    const newTodo = {
      id: Math.random().toString(),
      title: title,
    };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  return (
    <>
      <TodoInput onAddTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
