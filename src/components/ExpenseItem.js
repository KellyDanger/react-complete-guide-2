import './ExpenseItems.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {
    // const dateObject = new Date(2022, 2, 28).toISOString();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 147.00;

    return (
    <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;