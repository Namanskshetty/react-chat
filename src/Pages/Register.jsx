import React, { useState } from 'react'
import Add from "../img/addAvatar.png";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Register = () => {
const[err,setErr]=useState(false)
const handleSubmit =async (e)=>{
e.preventDefault()
const displayName=e.target[0].value;
const email=e.target[1].value;
const password=e.target[2].value;
const file=e.target[3].files[0];
try{

  const res=await createUserWithEmailAndPassword(auth, email, password);
}
catch(err){
  setErr(true);
  console.log(err);
}
};
  
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>TTG Social</span>
            <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Display Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input style={{display:"none"}} type="file"/>
            <label htmlFor='file'>
              <img src={ Add } alt="" />
              <span>Add an Avatar</span>
            </label>
            <button>Sign up</button>
            {err && <span>Something went wrong</span>}
            <p>Have an account? Login here</p>
        </form>
        </div>
    </div>
  )
}
