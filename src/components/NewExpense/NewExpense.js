import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from "react";


const NewExpense = (props) => {   
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    
    const toggleForm = () => {
        setShowForm(!showForm);
    }
    
    return (
        showForm ? 
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        <button onClick={toggleForm}>Cancel</button>
    </div>
    :
    <div className="new-expense">
         <button onClick={toggleForm}>Add A New Expense Dude</button>
    </div>
    );
}

export default NewExpense;