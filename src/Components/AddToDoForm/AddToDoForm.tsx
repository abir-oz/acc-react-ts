import React from "react";

interface Props {
  addTodo: AddTodo;
}

const AddToDoForm: React.FC<Props> = ({ addTodo }) => {
  const [task, setTask] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(task);
        setTask("");
      }}
    >
      <input
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit"> Add ToDo</button>
    </form>
  );
};

export default AddToDoForm;
