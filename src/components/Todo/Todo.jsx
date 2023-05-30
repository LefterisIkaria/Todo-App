import styles from "./Todo.module.css";

function Todo({ todo, onToggleCompleted, onDelete }) {
  const toggleCompletedHandler = () => {
    onToggleCompleted(todo.id);
  };

  const deleteHandler = () => {
    onDelete(todo.id);
  };

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompletedHandler}
      />
      <p className={todo.completed && styles.completed}>{todo.title}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Todo;
