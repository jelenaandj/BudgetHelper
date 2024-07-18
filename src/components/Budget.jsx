import React, { useEffect } from 'react'


export default function Budget(props) {

    let income=props.income
    let expense=props.expense
    let budg=props.budg
    let setBudg=props.setBudg
    let prevBudg=props.prevBudg


useEffect(()=>{
    
    /////////////////////
    let totalInc=0
    income.forEach(element => {
        totalInc+=parseInt(element.numb)
    });
    
    let totalExp=0
    expense.forEach(element => {
        totalExp+=parseInt(element.numb)
    },[income,expense]);
    let tmp=totalInc-totalExp
if(prevBudg !== 'number'){
    setBudg(tmp+prevBudg)
}else{
    setBudg(tmp+prevBudg)

}
},) 
    return (
        <div className='budget'>
        <div className='previous-month'>
            Previous Month: {prevBudg}
        </div>
        <div className='current-budget'>
            Current Budget: {budg}
        </div>
        
        </div>
    )
}
