import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";

const ExpensesList = (props) => {
  const items = props.items;
  const filteredExpenses = props.filteredExpenses;
  const filterYear = props.filterYear;

  let expensesContent;

  switch (true) {
    case filterYear === "all":
      expensesContent = items.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ));
      break;
    case filteredExpenses.length === 0:
      expensesContent = (
        <h2 className='expenses-list__fallback'>
          You Have No Expenses for This Year
        </h2>
      );
      break;
    default:
      expensesContent = filteredExpenses.map((filteredItem) => (
        <ExpenseItem
          key={filteredItem.id}
          id={filteredItem.id}
          title={filteredItem.title}
          amount={filteredItem.amount}
          date={filteredItem.date}
        />
      ));
  }

  return <ul className='expenses-list'>{expensesContent}</ul>;
};

export default ExpensesList;
