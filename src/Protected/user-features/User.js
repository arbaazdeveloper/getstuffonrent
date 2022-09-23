import  Axios  from 'axios'
import { Image } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter, putRequest } from '../../requests/request'
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from './Sidebar';

const User = (props) => {
    const {user}=props
    const [profileImg,setProfileImg]=useState("")
    const [img,setImg]=useState("")
  
    const uploadProfile=async()=>{
        if(profileImg===""){
            alert('file is not selected')
            return
        }
        const data=new FormData()
        data.append('file',profileImg)
        data.append("upload_preset","rj6ga4au")
        const imgResponse=await Axios.post('https://api.cloudinary.com/v1_1/dwl4ftefk/image/upload',data)
        const setImage=await putRequest('/profileimg',{profileImg:imgResponse.data.public_id})
        setImg(imgResponse.data.public_id)

    }
    
    useEffect(()=>{
        setImg(`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${user.profileImg}`)
   
    },[user])
  return (
    <div className='front-item'>
    
        <div className='profile-image'>
            <div>
            <label htmlFor='profileInput'>
        <i class="bi bi-pencil-square"></i>
        <input type='file' id='profileInput'  onChange={(e)=>setProfileImg(e.target.files[0])}/>
        </label>
        <Image cloudName='dwl4ftefk' publicId={img}></Image>
            </div>
       
        <button onClick={uploadProfile}><i class="bi bi-upload"></i> upload</button>
        <h1>{capitalizeFirstLetter(user.name)}</h1>
        <p>{user.email}</p>
        </div>
    </div>
  )
}

export default User