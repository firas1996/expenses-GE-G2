import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card";

const ExpenseItem = ({ title, price, date }) => {
  // console.log(title);
  // const [myTitle, setMyTitle] = useState(title);
  // setMyTitle(title);
  // const changeHandler = () => {
  //   // myTitle = "";
  //   setMyTitle("New Title !!!!");
  //   console.log(myTitle);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={changeHandler}>Update Title !!!</button> */}
        <div className="expense-item__price"> $ {price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
