import { Image } from 'cloudinary-react'
import React from 'react'
import { capitalizeFirstLetter } from '../../requests/request'

const Profileview = (props) => {
    const {user,button}=props
  return (
    <div className='profile-mid-item'>
        <div className='profile-view-box'>
        <Image cloudName='dwl4ftefk' publicId={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${user.profileImg}`}></Image>
        <div className='user-information'>
            <h1>{capitalizeFirstLetter(user.name)}</h1>
            <p><i class="bi bi-envelope"></i> {user.email}</p>
            <p><i class="bi bi-telephone"></i> {user.contact}</p>
            <p><i class="bi bi-geo-alt"></i> {user.adress}</p>
        {button}
        </div>
        </div>
    </div>
  )
}

export default Profileview