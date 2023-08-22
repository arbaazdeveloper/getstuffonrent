import React from 'react'
import User from './User'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    const { user, closeButton, isOpen, toggleBar } = props
    return (
        <div className={`side-item relative ${isOpen ? 'active-sidebar' : ''}`}>
            <button className='close-btn' onClick={()=>toggleBar(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
            </button>
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