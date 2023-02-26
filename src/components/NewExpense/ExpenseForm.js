import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm=()=>{
    const[updatedTitle,setUpdatedTitle]=useState('')
    const TitleChangehandler=(event)=>{
    setUpdatedTitle(event.target.value)
    }
    const [updatedAmount,setUpdatedAmount]=useState('')
    const AmountChangeHandler=(event)=>{
       setUpdatedAmount(event.target.value)
    }
    const [updatedDate,setUpdatedDate]=useState('')
    const DateChangeHandler=(event)=>{
       setUpdatedDate(event.target.value)
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' onChange={TitleChangehandler}/>
           </div>
           <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler}/>
           </div>
           <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-01-30' onChange={DateChangeHandler}/>
           </div>
           <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </div>
       
    </form>
}
export default ExpenseForm