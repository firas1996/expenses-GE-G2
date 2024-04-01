import { useState } from "react";
import "./AddNewExpense.css";
let id = 5;
const NewExpenseForm = ({ formHandler, getData }) => {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [date, setDate] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const [validateImputs, setValidateImputs] = useState({
    title: true,
    price: true,
    date: true,
  });
  const titleChanger = (event) => {
    // setTitle(event.target.value);
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
  const handelInputs = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const validate = (name, value) => {
    if (value.trim().length === 0) {
      setValidateImputs({ ...validateImputs, [name]: false });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputs.title.trim().length === 0 ||
      inputs.price.trim().length === 0 ||
      inputs.date.trim().length === 0
    ) {
      validate("title", inputs.title);
      validate("price", inputs.price);
      validate("date", inputs.date);
      return;
    }
    getData({
      id: id,
      title: inputs.title,
      date: new Date(inputs.date),
      price: +inputs.price,
    });
    id++;
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            // required
            style={{ borderColor: validateImputs.title ? "#ccc" : "red" }}
            placeholder="Title"
            onChange={handelInputs}
            value={inputs.title}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            // required
            style={{ borderColor: validateImputs.price ? "#ccc" : "red" }}
            type="number"
            min="0"
            step="0.01"
            placeholder="Price"
            onChange={handelInputs}
            value={inputs.price}
            name="price"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            // required
            style={{ borderColor: validateImputs.date ? "#ccc" : "red" }}
            onChange={handelInputs}
            value={inputs.date}
            type="date"
            min="2022-01-01"
            max="2026-12-31"
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={formHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
