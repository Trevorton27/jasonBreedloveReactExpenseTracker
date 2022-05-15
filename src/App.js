import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense />
    </div>
  );
}

export default App;
