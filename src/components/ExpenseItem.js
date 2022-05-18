import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import React, { useState } from "react";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    // <Card className={"container"}>
    <div className={"expense-item container"}>
      <ExpenseDate date={props.date} />
      <div className={"expense-item__description"}>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
      {/*// </Card>*/}
    </div>
  );
}

export default ExpenseItem;
