import logo from './logo.svg';
// import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const Expenses=[{id:"e1",title:"Toilet Paper",amount:700,date:new Date(2021,5,14),LocationOfExpenditure:"Mumbai"},
  {id:"e2",title:"Toilet Soap",amount:7000,date:new Date(2020,5,14),LocationOfExpenditure:"Delhi"},
  {id:"e3",title:"Car",amount:2700000,date:new Date(2019,5,19),LocationOfExpenditure:"Indore"},
  {id:"e1",title:"SimCard",amount:200,date:new Date(2021,10,14),LocationOfExpenditure:"Bangalore"}]
  return (
    <div className="App">
      <header className="App-header">
     
        <ExpenseItem 
        title={Expenses[0].title}
        amount={Expenses[0].amount}
        date={Expenses[0].date}
        LocationOfExpenditure={Expenses[0].LocationOfExpenditure}
        ></ExpenseItem>
        <ExpenseItem
        title={Expenses[1].title}
        amount={Expenses[1].amount}
        date={Expenses[1].date}
        LocationOfExpenditure={Expenses[1].LocationOfExpenditure}
        ></ExpenseItem>
        <ExpenseItem
        title={Expenses[2].title}
        amount={Expenses[2].amount}
        date={Expenses[2].date}
        LocationOfExpenditure={Expenses[2].LocationOfExpenditure}
        ></ExpenseItem>
        <ExpenseItem
        title={Expenses[3].title}
        amount={Expenses[3].amount}
        date={Expenses[3].date}
        LocationOfExpenditure={Expenses[3].LocationOfExpenditure}
        ></ExpenseItem> 

       
      </header>
    </div>
  );
}

//   return (
//     <div>
//       <ExpenseItem></ExpenseItem>
//       {Expenses.map(expense => {
//         return (
//           <div key={expense.id}>
//             <h2>title: {expense.title}</h2>
//             <h2>amount: {expense.amount}</h2>
//             <h2>date: {expense.date}</h2>
//             <h2>LocationOfExpenditure: {expense.LocationOfExpenditure}</h2>

//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// }


export default App;
