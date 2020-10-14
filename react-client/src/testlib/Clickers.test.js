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
//it("should equal to 0", () => {
  // const { getByTestId } = render(<Clickers />)
  // expect(getByTestId("counter")).toHaveTextContent(0)
  // render(<Clickers />);
  // const loading = screen.getByText('Loading...')
  // expect(loading).toBeInTheDocument();
  //it("should increment", () => {
    // const { getByTestId } = render(<Clickers />)
    // expect(getByTestId("button-down")).toHaveAttribute("disabled")
    //const { getByTestId } = render(<Clickers />)
    // fireEvent.click(getByTestId("button-down"))
    // expect(getByTestId('counter')).toHaveTextContent('');
    //})

//   window.fetch = jest.fn(() => {
//   //const user = { name: 'Jack', email: 'jack@email.com' };
//   const todo = { description: 'Build react app' };
//   return Promise.resolve({
//     json: () => Promise.resolve(user),
//   });
// });


    // test("fetches and displays data", async () => {
    //   axiosMock.get.mockResolvedValueOnce({data: {description: 'Build react app'} });
    //   const
    //   render(<TodoListItem />);
    //   const description = await screen.findByText('Build react app');
    //   expect(description).toBeInTheDocument();
    // });

    
    import React from "react";
    import { render, fireEvent, cleanup, screen, waitForElement } from "@testing-library/react";
    import "@testing-library/jest-dom";
    import '@testing-library/jest-dom/extend-expect'
    import TodoListItem from '../components/TodoListItem';
    import axiosMock from 'axios';

  const { getTodos } = require("../API");

  afterEach(cleanup);
  beforeAll(() => {
    require("whatwg-fetch");
  });
  describe("todos API", () => {
    test("it returns an array of todos", async () => {
      const expected = [
        { id: '5f857bb7f9fffc17f08aa636', description: "Build react app", status: false },
        { id: '5f80b24f840f002704fb5f7d', description: "Go to cinema", status: false },
      ];
        render(<TodoListItem />);
        jest.spyOn(window, "fetch").mockImplementation(() => {
        const fetchResponse = {
          ok: true,
          json: () => Promise.resolve(expected)
        };
        return Promise.resolve(fetchResponse);
      });
      const json = await getUsers("http://localhost:4000/todos");
      expect(json).toMatchObject(expected);
    });
  });
