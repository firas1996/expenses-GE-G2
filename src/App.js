import ExpensesContainer from "./Components/Expenses/ExpensesContainer";
import AddNewExpense from "./Components/NewExpenses/AddNewExpense";

function App() {
  const expensesData = [
    {
      id: 1,
      data: new Date(2025, 7, 20),
      price: 1234,
      title: "New Phone",
    },
    {
      id: 2,
      data: new Date(2023, 10, 2),
      price: 2500,
      title: "New PC",
    },
    {
      id: 3,
      data: new Date(2024, 4, 30),
      price: 3000,
      title: "Voyage",
    },
    {
      id: 4,
      data: new Date(2024, 10, 15),
      price: 7000,
      title: "Education",
    },
  ];
  return (
    <div>
      <AddNewExpense />
      <ExpensesContainer expensesData={expensesData} />
    </div>
  );
}

export default App;
