import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import './App.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Main from './layout/Main';

const uuidv4 = require('uuid/v4')
require("firebase/firestore");

function App() {
    const[inputs,setInputs]=useState([])
    const[user,setUser]=useState()
    const[showLogin,setShowLogin]=useState(false)
    const[showRegister,setShowRegister]=useState(false)
    const[budg,setBudg]=useState(0)
    const[prevBudg,setPrevBudg]=useState(0)
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[userData,setUserData]=useState('')
    const[allBudgets,setAllBudgets]=useState()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, 
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID
  };


if (!firebase.apps.length && firebaseConfig) {
    firebase.initializeApp(firebaseConfig);
  }
var db = firebase.firestore();

  const handleClick=(value,text,numb)=>{
    let tmp=[...inputs]
    tmp.push({value,text,numb,id:uuidv4()})
    setInputs(tmp)
  }

  let a = new Date();
  let m = '';

switch (a.getMonth() + 1) {
    case 1:
        m = 'January';
        break;
    case 2:
        m = 'February';
        break;
    case 3:
        m = 'March';
        break;
    case 4:
        m = 'April';
        break;
    case 5:
        m = 'May';
        break;
    case 6:
        m = 'Jun';
        break;
    case 7:
        m = 'July';
        break;
    case 8:
        m = 'August';
        break;
    case 9:
        m = 'September';
        break;
    case 10:
        m = 'Octobar';
        break;
    case 11:
        m = 'November';
        break;
    case 12:
        m = 'December';
        break;
    default:
        break;
}
const[month,setMonth]=useState(m)

// get username
const handleUserNameData=(e)=>{
  firebase.auth().onAuthStateChanged(function(user) {
    ///
    if(email !==undefined && username !==undefined && user){
    db.collection('users').doc(email).collection('personalInfo').doc('username').get()
    .then(function(doc) {
    if (doc.exists) {
    //
    setUserData(doc.data().username)
    console.log(userData)
    
    console.log("Document data:", doc.data());
    }else {
    // doc.data() will be undefined in this case
    setUserData(email)
    }})
    .catch(function(error) {
        console.error("Error getting document: ", error);
    });
    // User is signed in. 
    } 
  });

}
////
const signoutHandler=(e)=>{
  e.preventDefault()

  firebase.auth().signOut();
  setInputs([])
  setUser(undefined)
  setShowLogin(false)
  setShowRegister(false)
  setUserData('')
  setBudg(0)
  setPrevBudg(0)
  setMonth(m)
  setAllBudgets()
  console.log('logged out')
}
/////////
  return (
    <div className="App">
    <Navbar setAllBudgets={setAllBudgets} setUserName={setUserName} allBudgets={allBudgets} budg={budg} inputs={inputs} showLogin={showLogin} setShowLogin={setShowLogin} handleUserNameData={handleUserNameData} user={user} email={email} setEmail={setEmail} db={db} username={username} setUser={setUser} firebase={firebase} 
      setShowRegister={setShowRegister} showRegister={showRegister} userData={userData} signoutHandler={signoutHandler}/>
    <Main allBudgets={allBudgets} setAllBudgets={setAllBudgets} m={m} prevBudg={prevBudg} inputs={inputs} setInputs={setInputs} db={db} user={user} month={month} 
      setMonth={setMonth} setPrevBudg={setPrevBudg} email={email} budg={budg} setBudg={setBudg} handleClick={handleClick} />
    <Footer/>
    </div>
  );}

export default App;
