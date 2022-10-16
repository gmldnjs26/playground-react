import React, { FC, ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

export const TodosContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => prev.concat(new Todo(text)));
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const contextValue: TodosContextType = {
    todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return <TodosContext.Provider value={contextValue}></TodosContext.Provider>;
};
