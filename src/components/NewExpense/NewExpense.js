import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const newExpense = ({ addExpense }) => {
  const onSaveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    addExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );
};

export default newExpense;
