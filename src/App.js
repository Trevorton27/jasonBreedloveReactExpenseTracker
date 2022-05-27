import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";
import React, { useState } from "react";
import DeleteExpenseItem from "./components/DeleteExpense/DeleteExpense";

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
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <DeleteExpenseItem items={expenses} />

    </div>
  );
};
// }
export default App;
//filter expenses that do not match the selected element and redraw that new array to the screen rather than changing the array