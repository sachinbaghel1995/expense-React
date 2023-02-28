// import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './Expensedate'
import Card from './Card'
import React from 'react'
const ExpenseItem=(props)=>{
//   const [title,setTitle]=useState(props.title)
//   const [amount,setAmount]=useState(props.amount)
//     const clickHandler=()=>{
//         setTitle('UpdatedTitle')
//         console.log('clicked')
//         setAmount("$"+100)
//     }

    return(
        // <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description"><h2>{props.title}</h2>
             <div className="expense-item__price">{props.amount}</div>
            <div>{props.LocationOfExpenditure}</div>
            {/* <div className='expense-date'>{props.date.toLocaleString()}</div> */}
            {/* <button onClick={clickHandler}>ChangeTitle</button>
           <button onClick={clickHandler}>ChangeExpense</button> */}
            
            </div>
        </Card>
        // </li>
    )
}
export default ExpenseItem