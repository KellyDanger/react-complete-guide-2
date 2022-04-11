import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState, useEffect } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("select");

  // const items = props.items;
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(filterYear)
  );

  const allExpenses = props.items;

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
        {/* RENDER ALL EXPENSES IF NO YEAR IS SELECTED */}
        {filterYear === "select"
          && allExpenses.map((item) => (
              <ExpenseItem
                key={item.id}
                id={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            ))
          }
          {/* RENDER A MESSAGE IF NO EXPENSES EXIST IN THE FILTERED YEAR */}
          {filteredExpenses.length === 0 && <p>You Have No Expenses</p>}
          {/* RENDER EXPENSES FOR THE CHOSEN YEAR */}
          {filteredExpenses.length > 0 &&
            filteredExpenses.map((filteredItem) => (
              <ExpenseItem
                key={filteredItem.id}
                id={filteredItem.id}
                title={filteredItem.title}
                amount={filteredItem.amount}
                date={filteredItem.date}
              />
            ))}
      </Card>
    </>
  );
}

export default Expenses;
