import React, { useState } from 'react'
import MonthBudget from './MonthBudget'

export default function AllBudgets(props) {

    // let db=props.db
    let allBudgets=props.allBudgets
    // let email=props.email
    let setAllBudgets=props.setAllBudgets
    const divHandler=(e)=>{
        setAllBudgets(undefined)
        
    }


    return (
        
        <div className='all-budgets'>
        {allBudgets && <><div><input type='submit' value='X' className='button' onClick={divHandler} /> </div>
        <div > {allBudgets!==undefined?  allBudgets.map(budget => <MonthBudget key={budget.month} budget={budget}/>) :'' }</div></> }
        </div>
    )
}
