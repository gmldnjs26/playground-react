import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const newExpense = ({ addExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default newExpense;
