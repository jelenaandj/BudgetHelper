import React from 'react'
import Select from 'react-select'


export default function Header(props) {

    let m=props.m
    let month=props.month
    let setMonth=props.setMonth
    let user=props.user
    let db=props.db
    let setInputs=props.setInputs
    let setPrevBudg=props.setPrevBudg
    let prevBudg=props.prevBudg
    let email=props.email

    
    const options = [
        { value: 'January', label: 'January',},
        { value: 'February', label: 'February', prevMonth:'January' },
        { value: 'March', label: 'March', prevMonth:'February' },
        { value: 'April', label: 'April', prevMonth:'March'  },
        { value: 'May', label: 'May', prevMonth:'April'  },
        { value: 'Jun', label: 'Jun', prevMonth:'May'  },
        { value: 'July', label: 'July', prevMonth:'Jun'  },
        { value: 'August', label: 'August', prevMonth:'July'  },
        { value: 'September', label: 'September', prevMonth:'August'  },
        { value: 'Octobar', label: 'Octobar', prevMonth:'September'  },
        { value: 'November', label: 'November', prevMonth:'Octobar'  },
        { value: 'December', label: 'December', prevMonth:'November'  }
      ]


    const onMonthChange=(e)=>{
        console.log(e)
        if(user!==undefined){
        if(e.value !==''){
        setMonth(e.value)
        console.log(month)
        console.log(e.label)
    ///get data form firestore//
        db.collection('users').doc(email).collection('months').doc(e.value).get()
        .then(function(doc) {
        if (doc.exists) {
        //
        setInputs(doc.data().inputs)

        console.log("Document data:", doc.data());
        }else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setInputs([])
            }
            })
        .catch(function(error) {
            console.error("Error getting document: ", error);
        });
        if(e.prevMonth!==undefined){
        ////////prev month
        // e.prevMonth !==undefined ?
        db.collection('users').doc(email).collection('months').doc(e.prevMonth).get()
        .then(function(doc) {
        if (doc.exists) {
        //
        setPrevBudg(doc.data().budg)
        console.log(prevBudg)

        console.log("Document data:", doc.data().budg);
        }else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setPrevBudg(0)
            }
            })
        .catch(function(error) {
            console.error("Error getting document: ", error);
        });
        // /prev month
        }else{
            setPrevBudg(0)
        }

            }else{
            alert('Choose a month')   
        }}else{
            setMonth(m)
            alert('Please log in to select a specific month')
            e.label=m
        }
    }

    return (
        <div className='header'>
                
            <h1>Your <label className='budget-label'>Budget</label> for</h1>
            <h1>{month}</h1>
            <Select options={options} className='select' placeholder='Select Month...'  onChange={onMonthChange} />   

        </div>
    )
}
