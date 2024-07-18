import React, { useState } from 'react'
import Select from 'react-select'
// import { firestore } from 'firebase'



export default function Form(props) {
    let handleClick=props.handleClick
    let db=props.db
    let month=props.month
    let user=props.user
    let inputs=props.inputs
    let budg=props.budg
    let email=props.email
   
    const options = [
        { value: 'Income', label: 'Income' },
        { value: 'Expense', label: 'Expense' }
      ]
    const[select,setSelect]=useState('')
    const[text,setText]=useState('')
    const[numb,setNumb]=useState('')
    
    const onSelectChange=(e)=>{
       if(e.value !==''){
       setSelect(e.value)
        }else{
        alert('Please input data')
       }
   }

    const onTextInput=(e)=>{
        if(e.target.value !== undefined ){
        setText(e.target.value)
        }else{
        alert('Please enter correct data format')}

    }
    const onNumbInput=(e)=>{
        if(e.target.value !== undefined ){
            setNumb(e.target.value)
            }else{
            alert('Enter correct data format')}
    }

    const handleButton=(e)=>{
        if(text !==''&& numb !==''&& select !==''){
            if(!isNaN(numb)){
                handleClick(select,text,numb)
                }else{
            alert('Use only numbers in the amount field')
                 
                    
                }
        e.preventDefault()}else{
            alert('Do not leave input fields empty')
        }
    }

    const handleSave=(e)=>{
        if(user!==undefined){
            db.collection('users').doc(email).collection('months').doc(month).set({
                inputs,
                budg
            }).then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });

        }else{
            alert('Please Sign in or Register')
        }
    }
    
    return (
        <div className='form' >
            <Select options={options} onChange={onSelectChange} placeholder='Choose type...'  className='select' />   
            <input type='text' placeholder='Description' onChange={onTextInput} />
            <input type='text' placeholder='Amount' onChange={onNumbInput} />

            <button onClick={handleButton} className='button'>Submit</button>
            <button onClick={handleSave}className='button'>Save</button>

        </div>
    )
}
