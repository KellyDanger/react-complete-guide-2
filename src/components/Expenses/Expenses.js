import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState, useEffect } from 'react';


function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');  
  
  const items = props.items;

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)//TWO WAY BINDING
    console.log(selectedYear);
  }
// LOGS THE VALUE OF FILTER YEAR ON CHANGE OR RELOAD OF COMPONENT
  useEffect(() => {
    console.log(filterYear);
  })

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>  
        {items.map((item) => {
          return ( 
            <ExpenseItem
              key={item.id}
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          )
        })}
      </Card>
    </>
  );
}

export default Expenses;
