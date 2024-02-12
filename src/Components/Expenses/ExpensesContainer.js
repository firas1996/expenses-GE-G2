import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.data}
            // key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
