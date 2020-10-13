import { Response, Request, response } from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "description" | "status">;

    const todo: ITodo = new Todo({
      description: body.description,
      status: body.status,
    });

    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

//Updata todo
const updateTodo = async (req: Request, res: Response): Promise<void> => {
  // try {
  //   //destructure paramas, body from requesting, dest id from params
  //   const {
  //     params: { id },
  //     body,
  //   } = req;

  //   const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
  //     { _id: id },
  //     body
  //   );
  //   const allTodos: ITodo[] = await Todo.find();
  //   res.status(200).json({
  //     message: "Todo updated",
  //     todo: updatedTodo,
  //     todos: allTodos,
  //   });
  // } catch (error) {
  //   throw error;
  // }
  res.send("update todo");
};

//Delete todo
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(id);
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
  // res.send("delete");
};

export { getTodos, addTodo, updateTodo, deleteTodo };
