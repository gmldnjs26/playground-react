import { useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const onSumitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(amount);
    setAmount(1);
  };
  return (
    <form className={classes.form} onSubmit={onSumitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: amount,
          onChange: (e) => setAmount(e.target.value),
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
