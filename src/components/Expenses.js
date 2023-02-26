import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
const Expenses = (props) => {
  return (
    <Card className="expenses" id="expenss">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        LocationOfExpenditure={props.items[0].LocationOfExpenditure}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        LocationOfExpenditure={props.items[1].LocationOfExpenditure}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        LocationOfExpenditure={props.items[2].LocationOfExpenditure}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        LocationOfExpenditure={props.items[3].LocationOfExpenditure}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;
