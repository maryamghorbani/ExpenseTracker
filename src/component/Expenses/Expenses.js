import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";


import './Expenses.css'


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpense.length > 0) {
        expensesContent = filteredExpense.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>
        ));
    }

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
            {expensesContent}
        </Card>
    )

}

export default Expenses;