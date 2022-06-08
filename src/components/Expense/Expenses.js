import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {props
        .expenses.filter(
          (expense) => expense.date.getFullYear().toString() === year
        )
        .map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
