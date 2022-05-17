import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import React, { useState } from "react";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description datePicker">
        <h2>{title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
