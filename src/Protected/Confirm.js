import Alerts from '../components/Alerts'
import { Image } from 'cloudinary-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter, postRequest } from '../requests/request'

const Confirm = () => {
    const[agree,setAgree]=useState(false)
    const user=useSelector((state)=>state.user.value)
    const item=useSelector((state)=>state.currentItem.value)
    const isAuth=useSelector((state)=>state.isAuth.value)

    document.title="confirm"
    const navigate=useNavigate()
   
    const confirm=async()=>{
      if(user[0].email===item.email){
        alert('You cannot book your own item 😊')
        return
      }
        const data={
            name:item.title,
            renterEmail:user[0].email,
            ownerId:item.userId,
            ownerEmail:item.email,
            time:"two day"
        }
        const response=await postRequest(`/bookitem/${item._id}`,data)
       if(response){
        alert('item booked')
       }
       else{
        alert('some error occured')
       }
      navigate('/')
    }
  useEffect(()=>{
    if(!isAuth.login){
      navigate('/')
    }
    window.scroll(0,0)
  },[])
  return (
    <div>
        <div className='confirm-list'>
        <Image cloudName='dwl4ftefk'  className='' publicId={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${item.images[0]}`}></Image>
            <h1>{capitalizeFirstLetter(item.title)}</h1>
            <h3>{item.category}</h3>
        </div>
        <div className='terms-conditions'>
            <h3>Terms & conditons</h3>
            <p>No damage of any sort will be paid for by our company. If the tenant does (damage) anything, there may be an additional fee.
            and if the time restriction is extended, there may be an additional fee.If the tenant engages in any criminal behaviour (such as stealing), we may file a lawsuit.
            Proof of address issued by the Government of India is required at time of delivery e.g Adhaar card,Voter id card ,Driving licence,Domicile certificate any one of them.If there is no proof of address at the time of delivery, the item will not be handed over.
            </p>
            <label htmlFor='agree'>
                I agree to terms & conditions
            <input id="agree" type="checkbox" onChange={()=>setAgree(agree?false:true)}></input>
            </label><br></br>
            <button onClick={confirm} disabled={agree?'':'true'}>confirm</button>
        </div>

    </div>
  )
}

export default Confirm