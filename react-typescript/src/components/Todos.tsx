import { FC, ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type MyComponentProps = {
  children?: ReactNode;
  items: Todo[];
};

const Todos: FC<MyComponentProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
