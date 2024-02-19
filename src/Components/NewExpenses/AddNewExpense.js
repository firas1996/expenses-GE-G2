import React, { useState } from "react";
import "./AddNewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const AddNewExpense = ({ getData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFormHandler = () => {
    setIsOpen(true);
  };
  const closeFormHandler = () => {
    setIsOpen(false);
  };
  const formHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="new-expense">
      {isOpen ? (
        <NewExpenseForm getData={getData} formHandler={formHandler} />
      ) : (
        <button onClick={formHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddNewExpense;
