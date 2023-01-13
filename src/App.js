import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'headphones',
    amount: 50,
    date: new Date(2021, 4, 14),
  },
  { id: 'e2', title: 'Clothes', amount: 150, date: new Date(2021, 7, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 300,
    date: new Date(2021, 11, 20),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 200,
    date: new Date(2022, 3, 22),
  },
  {
    id: 'e5',
    title: 'stationary',
    amount: 20,
    date: new Date(2022, 6, 12),
  },
  {
    id: 'e6',
    title: 'Television',
    amount: 350,
    date: new Date(2022, 10, 17),
  },

  {
    id: 'e7',
    title: 'books',
    amount: 100,
    date: new Date(2023,1,12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
