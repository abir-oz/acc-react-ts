interface Todo {
  task: string;
  completed: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (task: string) => void;
