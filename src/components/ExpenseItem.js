// import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './Expensedate'
import Card from './Card'
import { useState } from 'react'
const ExpenseItem=(props)=>{
  const [title,setTitle]=useState(props.title)
  const [amount,setAmount]=useState(props.amount)
    const clickHandler=()=>{
        setTitle('UpdatedTitle')
        console.log('clicked')
        setAmount("$"+100)
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description"><h2>{title}</h2>
             <div className="expense-item__price">{amount}</div>
            <div>{props.LocationOfExpenditure}</div>
            {/* <div className='expense-date'>{props.date.toLocaleString()}</div> */}
            <button onClick={clickHandler}>ChangeTitle</button>
           <button onClick={clickHandler}>ChangeExpense</button>
            
            </div>
        </Card>
    )
}
export default ExpenseItem