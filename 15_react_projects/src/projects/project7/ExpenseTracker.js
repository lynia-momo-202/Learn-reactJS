import React, { useState } from 'react'
import './App.css'

function ExpenseTracker() {

    const [total, setTotal] = useState(0.00)
    const [expenseList, setExpenseList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(new FormData(e.target))
        const expense = new FormData(e.target)
        // console.log("Expense = ", expense.get('Expense'))
        // console.log("Amount = ", expense.get('Amount'))

        const name = expense.get('Expense')
        const amount = parseFloat(expense.get('Amount'))

        const expenseListcopy = [...expenseList]
        // console.log(expenseListcopy)

        const id=expenseListcopy.length
        expenseListcopy.push({ id,name, amount })
        // console.log(expenseListcopy)

        setExpenseList(expenseListcopy)
        setTotal((total) => total + amount )
    }

    const handleDelete = (id) =>{
        const expenseListcopy = [...expenseList]
        // console.log(expenseListcopy)

        const expensedelete = (expenseListcopy.filter(e => e.id == id))
        const amountdelete = expensedelete[0].amount
        // console.log(amountdelete)

        const expenseListupdate = expenseListcopy.filter(expense => expense.id != id)

        setExpenseList(expenseListupdate)
        setTotal((total) => total - amountdelete )
    }

    return (
        <div className='container'>
            <h1 className='header'>Expense Tracker</h1>

            <form className='inputContainer' onSubmit={(e) => handleSubmit(e)}>
                <input type='text' name='Expense' className='input' placeholder='Expense'></input>
                <input type='number' name='Amount'  step="0.01" className='input' placeholder='Amount'></input>
                <input type='submit' value='Add' className='input button' />
            </form>

            <ul className='expenseList'>
                {
                    expenseList.map((expenseItem) =>
                    (
                        <li key={expenseItem.id} className='expenseItem'>
                            <span>{expenseItem.name}</span>
                            <span>xaf {expenseItem.amount}</span>
                            <button className='deleteButton' onClick={() => handleDelete(expenseItem.id)}>Delete</button>
                        </li>
                    )
                    )

                }
            </ul>

            <div className='total'>
                Total: xaf {total}
            </div>
        </div>
    )
}

export default ExpenseTracker