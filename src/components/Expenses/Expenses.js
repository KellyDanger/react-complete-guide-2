import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState, useEffect } from 'react';


function Expenses(props) {
  const [filterYear, setFilterYear] = useState('select');  
  
  // const items = props.items;

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)//TWO WAY BINDING
  }
// LOGS THE VALUE OF FILTER YEAR ON CHANGE OR RELOAD OF COMPONENT
  useEffect(() => {
    console.log(filterYear);
  })

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>  
        {props.items.map((item) => {
          let itemYear = item.date.getFullYear();
          if (Number(filterYear) === itemYear){
            return ( 
              <ExpenseItem
                key={item.id}
                id={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            )
          }
          if(filterYear === 'select'){
              return ( 
                <ExpenseItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
            )
          }
          else
            return null;
        })};
      </Card>
    </>
  );
}

export default Expenses;
