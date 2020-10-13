// import Axios from "axios";

// // export const addTodo = (list, item) => [item, ...list];
// const functions = {
//   fetchTodos: () =>
//     Axios.get("http://localhost:4000/todos")
//       .then((res) => res.data)
//       .catch((err) => "error"),
// };

// module.exports = functions;

import React, { useState } from "react";

const Clickers = () => {
  const [count, setCount] = useState(0);

  //   const increase = () => {
  //     setCount(count + 1);
  //   };
  //   const decrease = () => {
  //     setTimeout(() => {
  //       setCount(count - 1);
  //     }, 250);
  //   };
  return (
    <div>
      {/* <button onClick={increase}>Up</button> 
      <button onClick={decrease}>Down</button> */}
      <span data-testid="count">{count}</span>
    </div>
  );
};

export default Clickers;
