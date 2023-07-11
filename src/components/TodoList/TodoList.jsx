import Box from "../UI/Box/Box";
import Todo from "../Todo/Todo";

import styles from "./TodoList.module.css";

function TodoList({ todos, onToggleCompleted, onDelete }) {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const todoList = (
    <ul className={styles.todoList}>
      {[...incompleteTodos, ...completedTodos].map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onToggleCompleted={onToggleCompleted} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );

  const emptyMessage = <p className={styles.emptyMessage}>No todos yet...</p>;

  return <Box>{todos.length === 0 ? emptyMessage : todoList}</Box>;
}

export default TodoList;
