import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="alert alert-danger">Found no expenses</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))}
    </ul>
  );
};

export default ExpenseList;
