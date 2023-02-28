import React from "react";
import'./ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props)=>{
   
    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">No Expenses Found!</h2>
    }
    else if(props.items.length==1){
        return  (
            <p>
        <ul className="expenses-list">
        {props.items.map((expense)=>(<ExpenseItem 
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
           />))}
           </ul>

        <h2 className="expenses-list__fallback">Found Only one Expense! Please Add more</h2>
        </p>
        )
    }
    return(
        <ul className="expenses-list">
     {props.items.map((expense)=>(<ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />))}
        </ul>
    )

}
export default ExpensesList