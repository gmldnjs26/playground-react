import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default expenses;
