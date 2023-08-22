import React from 'react'
import User from './User'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    const { user, closeButton } = props
    return (
        <div className='side-item '>
            {closeButton}
            <User user={user} />
           
                <ul>
                    <Link to='/dashboard/list-item'>
                        <button className='side-button'>List Item</button>
                    </Link>
                    <Link to='/dashboard/your-item'>

                        <button className='side-button'>Your Items</button>
                    </Link>
                    <Link to='/dashboard/your-profile'>

                        <button className='side-button prof'>Profile</button>
                    </Link>
                </ul>
            
        </div>
    )
}

export default Sidebar