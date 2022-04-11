import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";

const ExpensesList = (props) => {
  const items = props.items;
  const filteredExpenses = props.filteredExpenses;
  const filterYear = props.filterYear;

  let expensesContent;

//   switch (filterYear) {
// // IF THE "ALL YEARS" OPTION IS SELECTED, RENDER ALL ITEMS
//     case "all":
//       expensesContent = items.map((item) => (
//         <ExpenseItem
//           key={item.id}
//           id={item.id}
//           title={item.title}
//           amount={item.amount}
//           date={item.date}
//         />
//       ));
//       break;
// // IF A YEAR IS SELECTED, THEN FOLLOW THIS NESTED SWITCH STATEMENT
//     default:
//       switch (filteredExpenses.length) {
//         case 0:
//           expensesContent = (
//             <h2 className='expenses-list__fallback'>
//               You Have No Expenses for This Year
//             </h2>
//           );
//           break;
//         default:
//           expensesContent = filteredExpenses.map((filteredItem) => (
//             <ExpenseItem
//               key={filteredItem.id}
//               id={filteredItem.id}
//               title={filteredItem.title}
//               amount={filteredItem.amount}
//               date={filteredItem.date}
//             />
//           ));
//       }
//   }

switch (true) {
    // IF THE "ALL YEARS" OPTION IS SELECTED, RENDER ALL ITEMS
        case (filterYear === 'all'):
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
    // IF A YEAR IS SELECTED, THEN FOLLOW THIS NESTED SWITCH STATEMENT
            case (filteredExpenses.length === 0):
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
