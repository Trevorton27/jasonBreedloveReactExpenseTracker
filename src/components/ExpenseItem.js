import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <span className="datePicker">
        <ExpenseDate></ExpenseDate>
      </span>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
