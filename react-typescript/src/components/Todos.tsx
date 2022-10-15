import { FC, ReactNode } from "react";
import Todo from "../models/todo";

type MyComponentProps = {
  children?: ReactNode;
  items: Todo[];
};

const Todos: FC<MyComponentProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
