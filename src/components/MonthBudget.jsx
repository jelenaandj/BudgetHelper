import React from 'react'


export default function MonthBudget(props) {
    let budget=props.budget
    

    return (
        <div>
        <div style={budget.budget<0? {color:'red'} : {color:'black'}}>{budget.month} {budget.budget} </div>

    </div>
    )
}
