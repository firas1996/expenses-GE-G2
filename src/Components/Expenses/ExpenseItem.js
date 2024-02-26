import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, price, date }) => {
  console.log(title);
  // const [myTitle, setMyTitle] = useState(title);
  // setMyTitle(title);
  // const changeHandler = () => {
  //   // myTitle = "";
  //   setMyTitle("New Title !!!!");
  //   console.log(myTitle);
  // };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={changeHandler}>Update Title !!!</button> */}
        <div className="expense-item__price"> $ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
