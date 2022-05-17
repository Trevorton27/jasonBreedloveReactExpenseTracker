import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "../ExpensesFilter";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      {/*<ExpensesFilter />*/}
      <div className={"new-expense"}>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
};

export default NewExpense;
