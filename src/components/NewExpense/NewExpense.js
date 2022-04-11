import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='new-expense'>
      {!showForm && (
        <button onClick={toggleForm}>Add A New Expense Dude</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
