import React, { useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = () => {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [date, setDate] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChanger = (event) => {
    // setTitle((prevState) => {
    //   return event.target.value;
    // });
    setInputs((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceChanger = (event) => {
    // setPrice(event.target.value);
    // setInputs({ ...inputs, price: event.target.value });
    setInputs((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };
  const dateChanger = (event) => {
    // setDate(event.target.value);
    // setInputs({ ...inputs, date: event.target.value });
    setInputs((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(title);
    // console.log(price);
    // console.log(date);
    console.log(inputs);
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={titleChanger}
              value={inputs.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              type="number"
              min="0"
              step="0.01"
              placeholder="Price"
              onChange={priceChanger}
              value={inputs.price}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              onChange={dateChanger}
              value={inputs.date}
              type="date"
              min="2022-01-01"
              max="2026-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
