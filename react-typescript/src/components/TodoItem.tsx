import { FC, ReactNode } from "react";
import Todo from "../models/todo";

type MyComponentProps = {
  children?: ReactNode;
  item: Todo;
};

const TodoItem: FC<MyComponentProps> = (props) => {
  return <li>{props.item.text}</li>;
};

export default TodoItem;
