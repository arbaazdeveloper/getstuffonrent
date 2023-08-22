import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './css/dashboard.css'
import Sidebar from '../../Protected/user-features/Sidebar'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const user=useSelector((state)=>state.user.value)
    
  return (
    <div className='dashboard'>
       <Sidebar user={user[0]}  closeButton={<button>Close</button>}/>
        <div className=''>

        </div>
        <Outlet/>
    </div>
  )
}

export default Dashboard