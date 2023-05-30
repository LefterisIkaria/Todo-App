import { useState } from "react";
import styles from "./App.module.css";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

const dummy = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Study", completed: true },
];

function App() {
  const [todos, setTodos] = useState(dummy);

  const addTodoHandler = (title) => {
    const newTodo = {
      id: Math.random().toString(),
      title: title,
    };

    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };

  const toggleCompletedHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const deleteHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <main className={styles.app}>
      <TodoInput onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onToggleCompleted={toggleCompletedHandler}
        onDelete={deleteHandler}
      />
    </main>
  );
}

export default App;
