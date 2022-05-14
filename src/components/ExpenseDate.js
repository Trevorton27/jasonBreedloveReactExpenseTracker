import "./ExpenseItem.css";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function ExpenseDate(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onchange={(date) => setStartDate(date)}
    ></DatePicker>
  );
}
export default ExpenseDate;
