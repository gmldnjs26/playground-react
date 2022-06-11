import "./ExpenseList.css";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expense-list">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.key}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
