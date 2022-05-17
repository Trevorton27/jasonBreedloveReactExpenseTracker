import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Gum",
    amount: 195,
    date: new Date(2020, 2, 5),
  },
  {
    id: "2",
    title: "Rent",
    amount: 1500,
    date: new Date(2022, 5, 14),
  },
  {
    id: "3",
    title: "Credit Card",
    amount: 400,
    date: new Date(2014, 7, 20),
  },
  {
    id: "4",
    title: "Games",
    amount: 60,
    date: new Date(2022, 5, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense];
    });
  };
  return (
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
// }
export default App;
