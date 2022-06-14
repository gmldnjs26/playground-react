import { useState } from "react";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import User from "./components/User/User";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (data) => {
    setExpenses((prev) => {
      return [...prev, data];
    });
  };
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <User />
    </div>
  );
}

export default App;
