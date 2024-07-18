import React from 'react'
import Input from './Input'




export default function Income(props) {

    let inputs=props.inputs
    let setInputs=props.setInputs
    return (
        <div className='income' >
           {inputs.length>0? <label>Incomes</label>:''}
           {inputs.filter(inputB=> inputB.value.includes('Income')).map(inputB=><Input inputB={inputB}  setInputs={setInputs} inputs={inputs} />) }
        </div>
    )
}
