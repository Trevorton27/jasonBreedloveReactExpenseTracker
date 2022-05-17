import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const d1 = new Date(props.date);
  const month = d1.toLocaleString("en-US", { month: "long" });
  const day = d1.toLocaleString("en-US", { day: "2-digit" });
  const year = d1.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
