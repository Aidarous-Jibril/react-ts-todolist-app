import React from "react";
import "./TodoListItem.css";

type Props = TodoProps & {
  deleteTodo: (_id: string) => void;
  toggleTodo: ToggleTodo;
};

const TodoListItem: React.FC<Props> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="todoItem">
      <label className={todo.status ? "status" : undefined}>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.description}
      </label>
      <button className="btn" onClick={() => deleteTodo(todo._id)}>
        X
      </button>
    </div>
  );
};

export default TodoListItem;

// import React from "react";
// import "./TodoListItem.css";

// interface TodoListItemProps {
//   todo: Todo;
//   toggleTodo: ToggleTodo;
//   deleteTodo: (_id: string) => void;
// }

// export const TodoListItem: React.FC<TodoListItemProps> = ({
//   todo,
//   toggleTodo,
//   deleteTodo,
// }) => {
//   return (
//     <li className="itemStyle">
//       <label className={todo.status ? "status" : undefined}>
//         <input
//           type="checkbox"
//           checked={todo.status}
//           onChange={() => {
//             toggleTodo(todo);
//           }}
//         />
//         {todo.description}
//       </label>
//       <div className="Card--button">
//         <button
//           onClick={() => deleteTodo(todo._id)}
//           className="Card--button__delete"
//         >
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// };
