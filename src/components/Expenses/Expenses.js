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
// // DEFAULT MESSAGE IF NO EXPENSES EXIST FOR THE SELECTED YEAR
//  let expensesContent = <p>You Have No Expenses</p>;
// // RENDER ONLY THE EXPENSES FOR THE SELECTED YEAR
//  if(filteredExpenses.length > 0) {
//    expensesContent = filteredExpenses.map((filteredItem) => (
//     <ExpenseItem
//       key={filteredItem.id}
//       id={filteredItem.id}
//       title={filteredItem.title}
//       amount={filteredItem.amount}
//       date={filteredItem.date}
//     />
//   ))
//  };
// // RENDER ALL EXPENSES IF NO YEAR IS SELECTED
//  if(filterYear === 'all'){
//   expensesContent = props.items.map((item) => (
//     <ExpenseItem
//       key={item.id}
//       id={item.id}
//       title={item.title}
//       amount={item.amount}
//       date={item.date}
//     />
//   ))
//  };

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
          filteredExpenses = {filteredExpenses}
          filterYear = {filterYear}
          items = {props.items}
        />
      </Card>
    </>
  );
}

export default Expenses;
