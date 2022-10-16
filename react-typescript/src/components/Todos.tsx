import { FC, ReactNode } from "react";
import classes from "./Todos.module.css";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
  children?: ReactNode;
  items: Todo[];
  onDeleteTodo: (id: string) => void;
};

const Todos: FC<TodosProps> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem item={item} key={item.id} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </ul>
  );
};

export default Todos;
