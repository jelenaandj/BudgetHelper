import React from 'react'
import Income from '../components/Income'
import Expenses from '../components/Expenses'
import Header from './Header'
import Budget from '../components/Budget'
import Total from '../components/Total'
import Form from '../components/Form'
import AllBudgets from '../components/AllBudgets'

export default function Main(props) {

let prevBudg=props.prevBudg
let m=props.m
let inputs=props.inputs
let setInputs=props.setInputs
let db=props.db
let user=props.user
let month=props.month
let setMonth=props.setMonth
let email=props.email
let setPrevBudg=props.setPrevBudg
let budg=props.budg
let setBudg=props.setBudg
let handleClick=props.handleClick
let allBudgets=props.allBudgets
let setAllBudgets=props.setAllBudgets

    return (
        <div className='main'>
            <Header m={m} prevBudg={prevBudg} inputs={inputs} setInputs={setInputs} db={db} user={user} month={month} setMonth={setMonth} setPrevBudg={setPrevBudg} email={email}/>
            <Budget prevBudg={prevBudg} expense={inputs.filter(inputB=> inputB.value.includes('Expense'))} income={inputs.filter(inputB=> inputB.value.includes('Income'))} budg={budg} setBudg={setBudg} />
                <div className='income-total'><label>Total Incomes:</label><Total  input={inputs.filter(inputB=> inputB.value.includes('Income'))}/></div>
                <div className='expense-total'><label>Total Expenses:</label><Total  input={inputs.filter(inputB=> inputB.value.includes('Expense'))}/></div>
            <Form handleClick={handleClick}  inputs={inputs} month={month} db={db} user={user} budg={budg} email={email} />
                <div className='container'>
                    <Income  inputs={inputs} setInputs={setInputs}/>
                    <Expenses  inputs={inputs} setInputs={setInputs} />
                </div>
                
                <AllBudgets allBudgets={allBudgets} setAllBudgets={setAllBudgets}/>
                <div id='all-budgets-div'>
                </div>
        </div>
    )
}
