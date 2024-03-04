import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ChartData from "./ChartGraphique/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Card";

const ExpensesContainer = ({ expensesData }) => {
  const dates = [
    "All",
    ...new Set(expensesData.map((item) => item.date.getFullYear()).sort()),
  ];
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  // console.log(selectedDate);
  const newList = expensesData.filter((item) => {
    return selectedDate == "All"
      ? true
      : selectedDate == item.date.getFullYear();
  });
  return (
    <Card className="expenses">
      <ExpensesFilter dates={dates} setSelectedDate={setSelectedDate} />
      <ChartData expensesData={newList} />
      {newList.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
};

export default ExpensesContainer;
