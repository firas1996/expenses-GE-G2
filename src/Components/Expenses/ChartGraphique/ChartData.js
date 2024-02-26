import React from "react";
import Chart from "./Chart";

const ChartData = ({ expensesData }) => {
  const chartList = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jly", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //   for (let i = 0; i < expensesData.length; i++) {
  //     chartList[expensesData[i].date.getMonth()].value += expensesData[i].price;
  //   }

  for (const item of expensesData) {
    chartList[item.date.getMonth()].value += item.price;
  }
  const values = chartList.map((item) => item.value);
  const max = Math.max(...values);
  const total = values.reduce((a, b) => {
    return a + b;
  });
  console.log(max);
  return <Chart max={max} total={total} chartList={chartList} />;
};

export default ChartData;
