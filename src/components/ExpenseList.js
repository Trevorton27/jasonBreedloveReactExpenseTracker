import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="alert alert-danger">Found no expenses</h2>;
  }

  const deleteExpense = (id) => {
    props.setExpenses(props.items.filter((expense) => expense.id !== id));
  };

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          deleteExpense={deleteExpense}
          id={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
