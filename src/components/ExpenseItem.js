import './ExpenseItems.css';

function ExpenseItem() {
    const dateObject = new Date(2022, 2, 28).toISOString();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 147.00;

    return (
    <div className="expense-item">
        <div>{dateObject}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;