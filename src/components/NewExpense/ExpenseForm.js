import React, { useState } from "react";
import "./NewExpenseForm.css";
import ExpenseDate from "../ExpenseDate";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };

  //partially done, pull data out of expenseDate
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={titleChangeHandler}
          />
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            placeholder="Amount"
            onChange={amountChangeHandler}
          />
          {/*<ExpenseDate />*/}
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            placeholder=""
            onChange={dateChangeHandler}
          />
        </div>
        <div className={"new-expense__actions"}></div>
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
