import "./ExpensesFilter.css";

const ExpensesFilter = ({ dates, setSelectedDate }) => {
  const handelChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <h3>Filer By Year</h3>
      <select onChange={handelChange}>
        {dates.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
