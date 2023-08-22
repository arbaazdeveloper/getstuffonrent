import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from '../redux-feature/isauth';
import { postRequest ,getRequest} from '../requests/request';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setUser } from '../redux-feature/user';
import { toast } from 'react-hot-toast';
import Modal from './Modal/Modal';


const Login = () => {
  const isAuth=useSelector((state)=>state.isAuth.value)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  const [isOpen,setIsOpen]=useState(false)
  const doLogin=async (e)=>{
    e.preventDefault()
    setIsOpen(true)
    const data={
      email:email,
      password:password
    }
    setError('Please Wait...')
    const result=await postRequest('/login',data)
    if(result.message==='Email not found'){
      setError('Email not found')
      setIsOpen(false)

      return toast.error('Email not found')
    }
    if(result.message==='Login with correct credentials'){
      setIsOpen(false)
      setError('Login with correct credentials')
      return toast.error('Login with correct credentials')
    }
    localStorage.setItem('loginkey',result.token)
    dispatch(setIsAuth({login:true}))
    dispatch(setUser(await getRequest('/getuser')))
    navigate('/dashboard/list-item');
    setIsOpen(false)
  
  }
  useEffect(()=>{
    if(isAuth.login){
    }
    
  },[])
  return (
    <div className='login-main'>
        
        <div className='row'>
            <div className='col-md-6'>
       <div className='container form-container'>
       <form>
        <h1 className='text-center'>Login</h1>
        <p className='text-center' style={{color:error==="Please Wait..."?'#000':'red'}}>{error}</p>
            <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <a href='#'>Forgot Password</a>
            <button onClick={doLogin}>Login <i class="bi bi-arrow-right"></i></button>
            <div className='create'>
                <p>Don't have account yet?</p>
                <Link to='/signup'>Sign Up</Link>
            </div>
         </form>
       </div>
            </div>
            <div className='col-md-6 card-side-img'>
         <div className='card-side'>
            <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/4.jpg"></img>
         </div>
            </div>

        </div>
      
        <Modal isOpen={isOpen}>
          <h1 style={{color:'#fff'}}>Please wait...</h1>

        </Modal>
    </div>
  )
}

export default Login