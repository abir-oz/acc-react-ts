import React, { useState } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
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
  const [errorMessage, setErrorMessage] = useState("");

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
    if (task === "") {
      setErrorMessage("Please enter a task");
      return;
    }
    setErrorMessage(" ");
    const newTodo = { task, completed: false };
    setToDos([...toDos, newTodo]);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React TODO APP</h1>
        <AddToDoForm addTodo={addTodo} />
        {errorMessage !== "" ? <p className="errorMsg">{errorMessage}</p> : ""}
        <ToDoList toDos={toDos} toggleToDo={toggleToDo} />
      </Wrapper>
    </>
  );
};

export default App;
