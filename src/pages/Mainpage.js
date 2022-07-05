import { useEffect, useReducer } from "react";

import Expenses from "../components/Expense/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import User from "../components/User/User";

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

const expensesReducer = (state, action) => {
  if (action.type === "INIT_EXPENSES") {
    return action.val;
  }
  if (action.type === "ADD_EXPENSE") {
    return [...state, action.val];
  }
  return DUMMY_DATA;
};

function App() {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_DATA);

  const addExpenseHandler = (data) => {
    dispatch({
      type: "ADD_EXPENSE",
      val: data,
    });
  };
  useEffect(() => {
    if (localStorage.getItem("expenses")) {
      const temp = JSON.parse(localStorage.getItem("expenses")).map((item) => {
        return {
          ...item,
          date: new Date(item.date),
        };
      });
      dispatch({
        type: "INIT_EXPENSES",
        val: temp,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <User />
    </div>
  );
}

export default App;
