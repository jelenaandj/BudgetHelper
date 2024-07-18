import React from 'react'

export default function Input(props) {
    
    let inputB=props.inputB
    let inputs=props.inputs
    let setInputs=props.setInputs

    console.log(inputs)

    const handleDelete=(id)=>{
        if(inputs.length !==0){
            setInputs(inputs.filter(input=>input.id !==id))
        }
          
    }

    return (
        
        <div className='input'>
            <p>{inputB.text} </p>
            <p>{parseInt(inputB.numb)} </p>
            <p className='empty'></p>
            {inputB?
            <button type='submit' className='button' onClick={()=>handleDelete(inputB.id)} >Delete</button>
        :null}
        </div>
        
    )
}
