import React from 'react';
import Chart from './Chart/Chart';

const ExpensesChart = (props) => {
  console.log('props in expenseChart: ', props);
  const chartDataPoints = [
    { key: 1, label: 'Jan', value: 0 },
    { key: 2, label: 'Feb', value: 0 },
    { key: 3, label: 'Mar', value: 0 },
    { key: 4, label: 'Apr', value: 0 },
    { key: 5, label: 'May', value: 0 },
    { key: 6, label: 'Jun', value: 0 },
    { key: 7, label: 'Jul', value: 0 },
    { key: 8, label: 'Aug', value: 0 },
    { key: 9, label: 'Sep', value: 0 },
    { key: 10, label: 'Oct', value: 0 },
    { key: 11, label: 'Nov', value: 0 },
    { key: 12, label: 'Dec', value: 0 }
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
