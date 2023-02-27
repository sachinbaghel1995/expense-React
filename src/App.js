// import logo from './logo.svg';
import './App.css';
import Expenses from "./components/Expenses";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
let dummyData=[ {
  id: "e1",
  title: "Toilet Paper",
  amount: 94.12,
  date: new Date(2020, 7, 14),
},
{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
{
  id: "e3",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: "e4",
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12),
},]

function App() {
 
  const[expenses,setExpenses]=useState(dummyData)

  const AddExpenseHandler=(expense)=>{
 console.log(expense)
 setExpenses((prevExpense)=>{
return [expense, ...prevExpense]
 })
  }
return (
  <div className="App">
    <header className="App-header">
    
<div className="expenses">
<NewExpense onAddExpense={AddExpenseHandler}/>
 <Expenses items={expenses}/>
  </div>
</header>
  </div>
);
}

export default App;

