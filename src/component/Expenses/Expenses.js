import React, {useState} from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


import './Expenses.css'


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/*{filteredExpense.length === 0 && <p>No expenses found.</p>}*/}
            {/*{filteredExpense.length > 0 &&*/}
            {/*filteredExpense.map(expense => (*/}
            {/*        <ExpenseItem*/}
            {/*            key={expense.id}*/}
            {/*            title={expense.title}*/}
            {/*            amount={expense.amount}*/}
            {/*            date={expense.date}/>*/}
            {/*    )*/}
            {/*)}*/}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )

}

export default Expenses;