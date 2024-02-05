import React from "react";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ar-Tn", { month: "long" });
  const day = date.toLocaleString("ar-EG", { day: "2-digit" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
