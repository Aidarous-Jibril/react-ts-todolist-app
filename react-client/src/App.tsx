import React, { useEffect, useState } from "react";
import TodoListItem from "./components/TodoListItem";
import AddTodoForm from "./components/AddTodoForm";
import { getTodos, addTodo, deleteTodo } from "./API";
import "./components/TodoListItem.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  //Runs when component is mounted
  useEffect(() => {
    fetchTodos();
  }, []);

  //Fetch all todos
  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: Todo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };  
  // //Add todo
  const handleSaveTodo: SaveTodo = (e, newTodo): void => {
    e.preventDefault();
    addTodo(newTodo)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  //Delete todo
  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  //Toggle todo, toggleTodo is type that declared in types file
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <main className="App">
      <h1>My Todos List</h1>
      <AddTodoForm saveTodo={handleSaveTodo} />
      {todos.map((todo: Todo) => (
        <TodoListItem
          key={todo._id}
          deleteTodo={handleDeleteTodo}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </main>
  );
};

export default App;

