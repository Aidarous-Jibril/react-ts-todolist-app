// import { addTodo } from "./helper";
// describe("addTodo", () => {
//   it("should add todo to the list", () => {
//     const startTodos = [
//       { id: 1, name: "one", isComplete: false },
//       { id: 2, name: "two", isComplete: false },
//     ];

//     const newTodo = { id: 3, name: "three", isComplete: false };
//     const expected = [
//       { id: 3, name: "three", isComplete: false },
//       { id: 1, name: "one", isComplete: false },
//       { id: 2, name: "two", isComplete: false },
//     ];
//     const result = addTodo(startTodos, newTodo);
//     expect(result).toEqual(expected);
//   });
// });

// const functions = require("./helper");

// //Test api
// test("Todos fetched should be equal rendering list items", () => {
//   //expect.assertions(1);
//   functions.fetchTodos().then((data) => {
//     expect(data).toBeInTheDocumentoBe();
//   });
// });

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Clickers from "./Clickers";

afterEach(cleanup);

test("coun todos", () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId("count")).toContain("0");
});
