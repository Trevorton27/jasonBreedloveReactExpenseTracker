import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Gum",
      amount: 195,
      date: new Date(2020, 2, 5),
    },
    {
      id: "2",
      title: "Rent",
      amount: 1500,
      date: new Date(2022, 5, 14),
    },
    {
      id: "3",
      title: "Credit Card",
      amount: 400,
      date: new Date(2014, 7, 20),
    },
    {
      id: "4",
      title: "Games",
      amount: 60,
      date: new Date(2022, 5, 10),
    },
  ];
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
