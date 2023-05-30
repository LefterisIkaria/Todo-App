import Box from "../UI/Box/Box";
import Todo from "../Todo/Todo";

import styles from "./TodoList.module.css";

function TodoList({ todos, onToggleCompleted, onDelete }) {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onToggleCompleted={onToggleCompleted}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
