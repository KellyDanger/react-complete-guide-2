// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState, useEffect } from "react";
import ExpensesList from "../ExpensesList/ExpensesList.js";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("all");

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(filterYear)
  );
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear); //TWO WAY BINDING
  };
  // LOGS THE VALUE OF FILTER YEAR ON CHANGE OR RELOAD OF COMPONENT
  useEffect(() => {
    console.log(filterYear);
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList
          filteredExpenses={filteredExpenses}
          filterYear={filterYear}
          items={props.items}
        />
      </Card>
    </>
  );
}

export default Expenses;
