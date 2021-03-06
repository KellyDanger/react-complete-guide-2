import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // STATE (MULTIPLE)
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");

  // EVENT HANDLERS
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate + "T00:00:00"),
    };
    props.onSaveExpenseData(expenseData);
    props.toggleForm();
    setNewAmount("");
    setNewTitle("");
    setNewDate(""); //THIS IN CONJUNCTION WITH....**
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newDate} //**THIS CLEARS THE INPUT
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.toggleForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
