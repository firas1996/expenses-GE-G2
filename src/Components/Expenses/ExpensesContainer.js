import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ChartData from "./ChartGraphique/ChartData";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesContainer = ({ expensesData }) => {
  const dates = [
    ...new Set(expensesData.map((item) => item.date.getFullYear()).sort()),
  ];
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  console.log(selectedDate);
  return (
    <div className="expenses">
      <ExpensesFilter dates={dates} setSelectedDate={setSelectedDate} />
      <ChartData expensesData={expensesData} />
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            // key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
