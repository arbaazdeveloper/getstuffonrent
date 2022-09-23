import React from 'react'
import User from './User'

const Sidebar = (props) => {
    const {user,button,closeButton}=props
  return (
    <div className='side-item'>
        {closeButton}
        <User user={user}/>
        <div>
            <ul>
                {button.map((item)=>{
                    return<>
                    <li>{item}</li>
                    </>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar