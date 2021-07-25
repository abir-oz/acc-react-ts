import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

interface Props {
  toDos: Todo[];
  toggleToDo: ToggleTodo;
}

const ToDoList: React.FC<Props> = ({ toDos, toggleToDo }) => {
  return (
    <ul>
      {toDos.map((todo) => (
        <ToDoListItem key={todo.task} todo={todo} toggleToDo={toggleToDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
