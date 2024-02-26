import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ChartData from "./ChartGraphique/ChartData";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
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
