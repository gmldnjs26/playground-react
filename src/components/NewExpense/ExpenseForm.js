import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault()
    addExpense({
      title,
      amount,
      date: new Date(date),
    });
    setTitle('')
    setAmount('')
    setDate('')
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onInput={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onInput={(e) => setDate(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
