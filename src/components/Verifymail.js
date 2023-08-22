import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../requests/request'
import "bootstrap-icons/font/bootstrap-icons.css";
import Modal from './Modal/Modal';
import { toast } from 'react-hot-toast';
const Verifymail = () => {
    const [message,setMessage]=useState()
    const navigate=useNavigate()
    const[input,setInput]=useState()
    const data=useSelector((state)=>state.signupdata.value)
    const code=useSelector((state)=>state.verificationCode.value)
    const [isOpen,setIsOpen]=useState(false)
    const verify=async()=>{
        setIsOpen(true)
        if(code===parseInt(input)){
            const doSignUp=await postRequest('/signup',data)
            if(doSignUp){
                setIsOpen(false)
                navigate('/login')
            }
        }
        else{
            setIsOpen(false)
            setMessage('verfication failed')
            return toast.error('verfication failed')
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
        <Modal isOpen={isOpen}>
          <h1 style={{color:'#fff'}}>Verifying Please wait...</h1>

        </Modal>
    </div>
  )
}

export default Verifymail