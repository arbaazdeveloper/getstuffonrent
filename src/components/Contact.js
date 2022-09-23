
import React from 'react'
import { useState } from 'react'
import { postRequest } from '../requests/request'

const Contact = () => {
  const [contact,setContact]=useState({name:"",email:"",subject:"",message:""})
  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
   
  }
  const sendContact=async(e)=>{
    e.preventDefault()
    if(contact.name===""||contact.email===""||contact.message===""){
      alert('all fields are needed')
      return
    }
    const response=await postRequest('/contact',contact)
    alert('Message sended')
    setContact({name:"",email:"",subject:"",message:""})

  }
  return (
    <div className='contact-us'>
      <div className='map'>
        <h1 style={{fontFamily:'system-ui'}}>Contact Us</h1>
        <hr></hr>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3598.664674061443!2d83.5866129149052!3d25.58282067222531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1662539254437!5m2!1sen!2sin" style={{width:"100%", height:"450px", border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='contact-information'>
      <h1 style={{fontFamily:'system-ui'}}>Contact Form</h1>
       <hr></hr>
       <div className='contact-container'>

   
       <div>
       <p  style={{fontFamily:'system-ui',fontSize:'20px'}}>Get in touch with us for inquiries or business proposals.we'll get back to you!</p>
       <form>
        <label htmlFor='name'>
          Your Name
        <input id="name" name="name" value={contact.name} onChange={(e)=>handleChange(e)}/>
        </label>
        <label htmlFor="email" >
        Your-Email
        <input id="email"name="email" value={contact.email} onChange={(e)=>handleChange(e)}/>
        </label>
        <label htmlFor='subject'>
          Subject
        <input id="subject" name="subject" value={contact.subject} onChange={(e)=>handleChange(e)}/>
        </label>
        <label htmlFor='message'>
        Message
        <textarea  value={contact.message}  id='message' name="message" cols="40" rows="10" className="" aria-invalid="false"onChange={(e)=>handleChange(e)}></textarea>
        </label>
        <div>
        <button onClick={(e)=>sendContact(e)} className='send-btn'>Send</button>
        </div>
       </form>
       </div>

       <div className='contact-banner'>

    <div className='contact-content'>
    <i class="bi bi-geo-alt-fill"></i>
    <div>
     <div className='ad-label'>Address:</div>
    <p> 1/2 Townhall Ghazipur Uttar Pradesh</p>
    </div> 
    
    </div>
    <div className='contact-content'>
    <i class="bi bi-telephone-fill"></i>
    <div>
     <div className='ad-label'>Phone:</div>
     <p>+919648415086</p>
    </div> 
    
    </div>
    <div className='contact-content'>
    <i class="bi bi-envelope-fill"></i>
    <div>
     <div className='ad-label'>Email:</div>
    <p>getstuffonrent@gamil.com</p>
    </div> 
    
    </div>
       </div>
       </div>

      </div>
    </div>
  )
}

export default Contact