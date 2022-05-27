import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import DeleteExpenseItem from "./DeleteExpense/DeleteExpense.jsx";
import React, { useState } from "react";

function ExpenseItem(props) {

  return (
    <div>
      <div className={"expense-item container"}>
        <ExpenseDate date={props.date} />
        <div className={"expense-item item__description"}>
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item expense-item_price">${props.amount}</div>
          <button onClick={props.onClick} className={'btn btn-lg btn-danger'} >Delete</button>
      </div>
        <div ></div>
    </div>
  );
}

export default ExpenseItem;
