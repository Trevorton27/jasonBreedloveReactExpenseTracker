import "./ExpenseItem.css";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function ExpenseDate(props) {
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <div className={".datepicker"}>
      <DatePicker
        className="form-control form-control-sm"
        type="text"
        size="sm"
        placeholder=""
        selected={date}
        onChange={handleChange}
      />
    </div>
  );
}
export default ExpenseDate;
