import React from 'react'
import Dashboard from '../layouts/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Listitem from '../Protected/user-features/Listitem'
import Youritems from '../Protected/user-features/Youritems'
import Profileview from '../Protected/user-features/Profileview'
import Protected from '../Protected/Protected'


const DashboardRoutes = () => {
    const user=useSelector((state)=>state.user.value);
  
    return (
        <Routes>
            <Route element={<Dashboard />}>
                <Route path='/list-item' element={<Listitem user={user[0]}/>}/>
                <Route path='/your-item' element={<Youritems/>}/>
                <Route path='/your-profile' element={<Profileview user={user[0]}/>}/>
            </Route>
         
        </Routes>
    )
}

export default DashboardRoutes