import classes from "./TodoItem.module.css";
import { FC, ReactNode } from "react";
import Todo from "../models/todo";

type TodoItemProps = {
  children?: ReactNode;
  item: Todo;
  onDeleteTodo: (id: string) => void;
};

const TodoItem: FC<TodoItemProps> = (props) => {
  const clickHandler = () => {
    props.onDeleteTodo(props.item.id);
  };
  return (
    <li className={classes.item}>
      <div>{props.item.text}</div>
      <button onClick={clickHandler}>Delete</button>
    </li>
  );
};

export default TodoItem;
