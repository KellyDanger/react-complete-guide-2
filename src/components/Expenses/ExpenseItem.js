import {useState} from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // useState is a hook 'title' is the name of the variable returned by useState and setTitle is the name of the function that allows me to change the value of 'title'
    const [title, setTitle] = useState(props.title);

    console.log('ExpenseItem ' + props.id +  ' evaluated by React');

    // click handler for Change Title button
    const clickHandler = () =>{
         setTitle('updated');
         console.log(title);
    }

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    );
}

export default ExpenseItem;