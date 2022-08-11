import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // 자동으로 subscription 등록

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
