import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../requests/request'
import "bootstrap-icons/font/bootstrap-icons.css";
const Verifymail = () => {
    const [message,setMessage]=useState()
    const navigate=useNavigate()
    const[input,setInput]=useState()
    const data=useSelector((state)=>state.signupdata.value)
    const code=useSelector((state)=>state.verificationCode.value)
    
    const verify=async()=>{
        if(code===parseInt(input)){
            const doSignUp=await postRequest('/signup',data)
            if(doSignUp){
                navigate('/login')
            }
        }
        else{
            setMessage('verfication failed')
        }
    }
  return (
    <div className='verify-mail'>
        <h1><i class="bi bi-envelope-check"></i></h1>
        <h2>Email Verification</h2>
        <p>We have sent you One Time Password on your provided email</p>
        <h6 className='error-message'>{message}</h6>
        <input type='number' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={verify}>Verify</button>
    </div>
  )
}

export default Verifymail