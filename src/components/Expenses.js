import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const date1 = new Date(expense.date);
    return date1.toLocaleString('en-US', { year: 'numeric' }) === filteredYear;
  });

  useEffect(() => {
    if (localStorage.getItem('list')) {
      props.setExpenses(JSON.parse(localStorage.getItem('list')));
    }
  }, []);

  useEffect(() => {
    if (filteredExpenses) {
      localStorage.setItem('list', JSON.stringify(filteredExpenses));
    }
  }, [filteredExpenses]);

  return (
    <div className={'container'}>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
      <div className={'expenses__header'}>
        <ExpenseList setExpenses={props.setExpenses} items={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expenses;
