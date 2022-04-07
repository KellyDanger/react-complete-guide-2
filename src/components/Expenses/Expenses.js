import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense.js"

function Expenses(props) {
  const items = props.items;

  return (
    <Card className='expenses'>
      <NewExpense/>
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
  );
}

export default Expenses;
