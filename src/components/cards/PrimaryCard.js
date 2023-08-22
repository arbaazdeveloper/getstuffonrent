import React from 'react';
import './card.css'
import { Image } from 'cloudinary-react'
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../requests/request';
const PrimaryCard = ({id,images,title,description,charges, chargesType}) => {
    const navigate = useNavigate();
    const getImage=()=>{
        if(images.length>0){
            return `https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${images[0]}`
        }else{
            return `https://img.freepik.com/premium-vector/victory-business-achievement-triumph-award-winning-accomplishment-leadership-success-determination-career-success-concept-cheerful-businessman-winner-raising-flag-winning-trophy_212586-2040.jpg?t=st=1692696681~exp=1692697281~hmac=9de3eaef06e9dcb8e5df1176533f6b5635e9bd05656e83f0e3a97ced735869bd`
        }
    }
  return (
    <div className='primary-card' onClick={()=>{navigate(`/item/${id}`)}}>
    <Image cloudName='dwl4ftefk' className='primay-card-image' publicId={getImage()}></Image>
    <h1>{capitalizeFirstLetter(title)}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
    <span>₹ {charges} / {chargesType}</span>
    <button>Get this now</button>
    </div>
  )
}

export default PrimaryCard