import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './Expenses';

const App=()=> {

  const expenses=[{id:"e1",title:"Toilet Paper",amount:700,date:new Date(2021,5,14),LocationOfExpenditure:"Mumbai"},
  {id:"e2",title:"Toilet Soap",amount:7000,date:new Date(2020,5,14),LocationOfExpenditure:"Delhi"},
  {id:"e3",title:"Car",amount:2700000,date:new Date(2019,5,19),LocationOfExpenditure:"Indore"},
  {id:"e1",title:"SimCard",amount:200,date:new Date(2021,10,14),LocationOfExpenditure:"Bangalore"}]
  return (
    <div className="App">
      <header className="App-header">
     <div className='expenses'>
        < Expenses items={expenses}/>
</div>
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
