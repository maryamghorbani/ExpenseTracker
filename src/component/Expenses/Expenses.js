import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";


import './Expenses.css'


const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    return (

        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
    )

}

export default Expenses;