import React from "react";

interface Props {
  todo: Todo;
  toggleToDo: ToggleTodo;
}

const ToDoListItem: React.FC<Props> = ({ todo, toggleToDo }) => {
  return (
    <li>
      <label
        style={{
          textDecoration: todo.completed ? "line-through" : undefined,
        }}
      >
        {" "}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleToDo(todo)}
        />{" "}
        {todo.task}
      </label>
    </li>
  );
};

export default ToDoListItem;
