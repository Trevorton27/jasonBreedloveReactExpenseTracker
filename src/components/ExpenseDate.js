import "./ExpenseItem.css";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function ExpenseDate() {
  const [selectedDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={selectedDate}
      onchange={(date) => setStartDate(date)}
    ></DatePicker>
  );
}
export default ExpenseDate;
