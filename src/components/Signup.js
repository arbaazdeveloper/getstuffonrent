import React, { useState } from 'react'
import { postRequest } from '../requests/request';
import { useDispatch } from 'react-redux';
import { addValue } from '../redux-feature/signupdata';
import { addCode } from '../redux-feature/code';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const [contact,setContact]=useState();
    const[city,setCity]=useState()
    const [adress,setAdress]=useState()
    const [password,setPassword]=useState()
    let notValid
    const[found,setFound]=useState('');
    const checkValidContact=(e)=>{
        setContact(e.target.value)
        const valid=/[0-9]/;
        notValid=valid.test(contact)
        if(!notValid){
            setFound('error')
        }else{
            setFound('')
        }
        
    }
    const VerifyMail= async(e)=>{
        e.preventDefault()

      const mycode=Math.floor(1000 + Math.random() * 9000)
      const data={
        email:email,
        code:mycode
      }
      const postData={
        name:name,
        email:email,
        password:password,
        city:city,
        contact:contact,
        adress:adress
      }
       const verification=await postRequest('/verify',data)
       if(verification){
        dispatch(addValue(postData))
        dispatch(addCode(mycode))
        navigate('/verifyemail')
       }
       
    }
  return (
    <div className='signup-main'>
        <h1 className='text-center'>Signup</h1>
        <form>
            <div className='wrapper'>
            <div>
            <h6><strong>Name</strong></h6>
            <input value={name} onChange={(e)=>setName(e.target.value)} type='text'placeholder='full name'/>
            </div>

            <div>
            <h6><strong>email</strong></h6>
            <input type='text'placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            </div>
            <div className='wrapper'>
            <div>
            <h6><strong>password</strong></h6>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='password'/>
            </div>
            <div>
            <h6><strong>Re type-password</strong></h6>
            <input type='text' placeholder='Re-password'/>
            </div>
            </div>
            
            <div className='wrapper'>
            <div>
            <h6><strong>city</strong></h6>
            <input type='text' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div>
            <h6><strong>contact no.</strong></h6>
            <input className={found} type='text' placeholder='contact' value={contact} onChange={(e)=>checkValidContact(e)}/>
            </div>
            </div>
            <div style={{width:'100%'}}>
            <h6><strong>Adress</strong></h6>
            <textarea value={adress} onChange={(e)=>setAdress(e.target.value)}>

            </textarea>
            </div>
            <button onClick={VerifyMail}>Sign up</button>
        </form>
    </div>
  )
}

export default Signup