import { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense }) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const onSaveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
  };

  const toggleShowForm = () => {
    setIsShowForm(!isShowForm);
  };
  return (
    <div className="new-expense">
      {isShowForm ? (
        <ExpenseForm
          onSaveExpense={onSaveExpenseHandler}
          closeForm={toggleShowForm}
        />
      ) : (
        <div>
          <button type="button" onClick={toggleShowForm}>
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
