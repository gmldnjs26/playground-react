import classes from "./NewTodo.module.css";
import React, { FC, ReactNode, useRef } from "react";

type NewTodoProps = {
  children?: ReactNode;
  onAddTodo: (text: string) => void;
};

const NewTodo: FC<NewTodoProps> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    props.onAddTodo(enteredText);
  };
  return (
    <form className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button onClick={submitHandler}>Add</button>
    </form>
  );
};

export default NewTodo;
