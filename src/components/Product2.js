import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product2 = () => {
  const navigate=useNavigate()
  return (
    <div className='product2'>
        <div className='first-side'>
        <div className='product2-info'>
            <h3 className='product-2-1'>Dinner set on rent</h3>
            <p>get best designer dinner sets at the best price here</p>
            <button onClick={()=>navigate('/search/kitchen appliances')} className='light-btn'>get now</button>
        </div>
        <img src="https://res.cloudinary.com/dwl4ftefk/image/upload/v1663840837/syed-maaz-oMOILed2rww-unsplash_1_brmzu7.jpg"/>
        </div>
        <div className=' first-side'>
        <div className='product2-info'>
            <h3 className='product-2-2'>Decorative item on rent</h3>
            <p>get best decorative stuffs at the best price here</p>
            <button onClick={()=>navigate('/search/decorative')} className='dark-btn'>get now</button>
        </div>
        <img src="https://res.cloudinary.com/dwl4ftefk/image/upload/v1663840636/alexandra-gorn-W5dsm9n6e3g-unsplash_1_kqexzu.jpg"/>
        </div>
    </div>
  )
}

export default Product2