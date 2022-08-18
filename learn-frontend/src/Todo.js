function Todo({ todo, toggleTodo }) {
  function handleTodoClick(e) {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;

