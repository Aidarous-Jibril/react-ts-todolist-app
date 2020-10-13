import React, { useState } from "react";
import "./TodoListItem.css";

type addTodoProps = {
  saveTodo: SaveTodo;
};

const AddTodoForm: React.FC<addTodoProps> = ({ saveTodo }) => {
  const [newTodo, setNewTodo] = useState<Todo | {}>();

  const handleFormSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    setNewTodo({
      ...newTodo,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="todoForm" onSubmit={(e) => saveTodo(e, newTodo)}>
      <div className="input">
        <label htmlFor="description">Description:</label>{" "}
        <input onChange={handleFormSubmit} type="text" id="description" />
      </div>

      <button>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;

