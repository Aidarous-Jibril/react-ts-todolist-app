// //Toggle todo type
type ToggleTodo = (selectedTod: Todo) => void;
// type AddTodo = (newTodo: string) => void;
// type AddTodo = (newTodo: Todo) => void;
type SaveTodo = (e: React.FormEvent, newTodo: Todo | any) => void;

interface Todo {
  _id: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: Todo;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: Todo[];
  todo?: Todo;
};
