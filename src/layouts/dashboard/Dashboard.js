import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './css/dashboard.css'
import Sidebar from '../../Protected/user-features/Sidebar'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const user = useSelector((state) => state.user.value);
    const [isOpen, setClose] = useState(false)

    return (
        <div className='dashboard'>

            <div>
                <button className='open-btn' onClick={() => setClose(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
               
                    <Sidebar user={user[0]} toggleBar={setClose} isOpen={isOpen} closeButton={<button>Close</button>} />
               
            </div>

            <Outlet />
        </div>
    )
}

export default Dashboard