import React from "react";
import "./AddNewExpense.css";

const AddNewExpense = () => {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
