import React, { useState } from "react";
import ExpensesContainer from "./Components/Expenses/ExpensesContainer";
import AddNewExpense from "./Components/NewExpenses/AddNewExpense";
import MyFrag from "./Components/MyFrag";

function App() {
  const oldData = [
    {
      id: 1,
      date: new Date(2025, 7, 20),
      price: 1234,
      title: "New Phone",
    },
    {
      id: 2,
      date: new Date(2023, 10, 2),
      price: 2500,
      title: "New PC",
    },
    {
      id: 3,
      date: new Date(2024, 4, 30),
      price: 3000,
      title: "Voyage",
    },
    {
      id: 4,
      date: new Date(2024, 10, 15),
      price: 7000,
      title: "Education",
    },
  ];
  const [expensesData, setExpensesData] = useState(oldData);
  const getData = (data) => {
    setExpensesData((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <>
      <AddNewExpense getData={getData} />
      <ExpensesContainer expensesData={expensesData} />
    </>
  );
}

export default App;
