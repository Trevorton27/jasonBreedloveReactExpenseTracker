import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <div className={"expense-item container"}>
      <ExpenseDate date={props.date} />
      <div className={"expense-item item__description"}>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item expense-item_price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
