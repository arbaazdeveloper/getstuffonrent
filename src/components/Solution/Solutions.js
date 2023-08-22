import React from 'react'
import './solve.css'
const Solutions = () => {
  return (
    <div className='solutions'>
        <h1>What we solve</h1>
        <h5>Why us?</h5>
      <div className='solutions-container'>

        <div className='solve-card'>
          <img src='https://cdn.pixabay.com/photo/2017/05/18/11/04/key-2323278_1280.jpg'/>
          <h3>Renting items option</h3>
          <p>Enabling seamless item rentals through our website, with a user-friendly interface, inventory management, and secure payment integration.</p>
        </div>
        <div className='solve-card'>
          <img src='https://res.cloudinary.com/dwl4ftefk/image/upload/v1662558938/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1_ztt4dn.jpg'/>
          <h3>Easy delivery</h3>
          <p>Experience the convenience and speed of our delivery services, ensuring your items reach you quickly and effortlessly.</p>
        </div>
        <div className='solve-card'>
        <img src='https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg'/>
          <h3>Maintainence and security</h3>
          <p>We prioritize security by requesting government ID during delivery, ensuring a safe and trustworthy experience.</p>
        </div>
      </div>
    </div>
  )
}

export default Solutions