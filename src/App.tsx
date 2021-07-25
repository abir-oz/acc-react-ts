import React, { useState } from "react";
import AddToDoForm from "./Components/AddToDoForm/AddToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";

const initialToDos: Todo[] = [
  {
    task: "Task One",
    completed: false,
  },
  {
    task: "Task Two",
    completed: true,
  },
  {
    task: "Task Three",
    completed: false,
  },
];

const App = () => {
  const [toDos, setToDos] = useState(initialToDos);

  const toggleToDo = (selectedTodo: Todo) => {
    const newToDos = toDos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setToDos(newToDos);
  };

  const addTodo: AddTodo = (task: string) => {
    const newTodo = { task, completed: false };
    setToDos([...toDos, newTodo]);
  };

  return (
    <div>
      <h1>React TODO APP</h1>
      <AddToDoForm addTodo={addTodo} />
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} />
    </div>
  );
};

export default App;
