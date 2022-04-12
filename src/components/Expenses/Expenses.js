// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState, useEffect } from "react";
import ExpensesList from "../ExpensesList/ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("all");

  let filteredExpenses = '';

  switch (filterYear) {
    case 'all':
      filteredExpenses = props.items;
  break;
    default :
      filteredExpenses = props.items.filter(       
         (item) => item.date.getFullYear() === Number(filterYear))
  break;
  };

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear); //TWO WAY BINDING
  };
  // LOGS THE VALUE OF FILTER YEAR ON CHANGE OR RELOAD OF COMPONENT
  useEffect(() => {
    // console.log(filteredExpenses);
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
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
