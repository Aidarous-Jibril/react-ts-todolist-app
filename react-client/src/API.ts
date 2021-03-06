import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

//Add todo
export const addTodo = async (
  formData: Todo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<Todo, "_id"> = {
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

//Delete todo
export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
};
