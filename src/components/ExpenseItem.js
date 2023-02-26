import './ExpenseItem.css'
import ExpenseDate from './Expensedate'
import Card from './Card'
const ExpenseItem=(props)=>{
    const clickHandler=()=>{
        console.log('clicked')
    }
    const deleteHandler=(e)=>{
        console.log('delete')
        let itemList=document.getElementById('root')
        // if (e.target.classList.contains('expenses')) {
        // var li = document.getElementsByClassName('expenses')
        var li=e.target.parentElement
                itemList.remove(li)
        // }

    }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description"><h2>{props.title}</h2>
             <div className="expense-item__price">{props.amount}</div>
            <div>{props.LocationOfExpenditure}</div>
            {/* <div className='expense-date'>{props.date.toLocaleString()}</div> */}
            <button onClick={clickHandler}>ChangeTitle</button>
            <button onClick={deleteHandler}>DeleteExpense</button>
            
            </div>
        </Card>
    )
}
export default ExpenseItem