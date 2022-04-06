import './ExpenseItems.css';

function ExpenseItem(props) {
    // const dateObject = new Date(2022, 2, 28).toISOString();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 147.00;

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
    <div className="expense-item">
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;