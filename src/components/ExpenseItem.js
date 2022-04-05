import './ExpenseItems.css';

function ExpenseItem(props) {
    // const dateObject = new Date(2022, 2, 28).toISOString();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 147.00;

    return (
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;