import {useState} from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // useState is a hook
    const [title, setTitle] = useState(props.title);

    // click handler for Change Title button
    const changeTitleHandler = () =>{
         setTitle('updated')
    }

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
    );
}

export default ExpenseItem;