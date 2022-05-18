import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./NewExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler} className={"container bg-gradient"}>
      <div>
        <div className={"form-group"}>
          {/*<div className={"new-expense__control"}>*/}
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            // className={"form-control"}
          />
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            placeholder="Amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
            // className={"form-control"}
          />
          {/*<ExpenseDate />*/}
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            placeholder=""
            value={enteredDate}
            onChange={dateChangeHandler}
            // className={"form-control"}
          />
        </div>
        {/*<div className={"new-expense__actions"}></div>*/}
        <div>
          <button
            className={"btn btn-primary"}
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          {/*type={"button"}*/}
          {/*onClick={props.onCancel}*/}
          {/*className="btn btn-primary" > Cancel*/}
          {/*</button>*/}
          <button type={"submit"} className={"btn btn-primary"}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
