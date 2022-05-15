import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <span className="datePicker">
        <ExpenseDate></ExpenseDate>
      </span>
      <div className="expense-item__description datePicker">
        <h2>{title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
