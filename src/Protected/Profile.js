import React, { useEffect, useState } from 'react'
import { getRequest, upperCase } from '../requests/request'
import Sidebar from './user-features/Sidebar'
import "bootstrap-icons/font/bootstrap-icons.css"
import Listitem from './user-features/Listitem'
import Profileview from './user-features/Profileview'
import Youritems from './user-features/Youritems'
import Updateuser from './user-features/Updateuser'

const Profile = () => {
  const [user,setUser]=useState([]);
  const [isOpen,setClose]=useState(false)
  const [component,setComponent]=useState()
  const getUser=async ()=>{
    const result=await getRequest('/getuser')
    setUser(result[0])
  }
const toggle=()=>{
  setClose(isOpen?false:true)
}
  const button1=<>
  <button onClick={()=>setComponent(<Listitem user={user}/>)} className='side-button'>List Item</button>
  </>
     const button4=<>
     <button onClick={()=>setComponent(<Updateuser/>)} className='side-button'><i class="bi bi-gear"></i> Setting</button>
     </>
  const button2=<>
  <button onClick={()=>setComponent(<Profileview user={user} button={button4}/>)} className='side-button prof'>Profile</button>
  </>
   const button3=<>
   <button onClick={()=>setComponent(<Youritems />)} className='side-button'>Your Items</button>
   </>

   const buttons=[button1,button2,button3]
   const closeButton=<>
      <button onClick={toggle} className='close-sidebar'><i class="bi bi-x-square"></i></button>
   </>
  useEffect(()=>{
    getUser()
   setComponent(<Youritems/>)
  },[])
  return (
    <div>
      <button className='open-btn' onClick={toggle}><i class="bi bi-layout-text-sidebar-reverse"></i></button>
      <div className={`side-bar ${isOpen?'active-sidebar':''}`} styles={{width:0}}>
      <Sidebar user={user} button={buttons} closeButton={closeButton}/>
      </div>
        {component}
    </div>
  )
}

export default Profile