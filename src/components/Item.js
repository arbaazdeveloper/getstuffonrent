import { Image } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setcurrentItem } from '../redux-feature/current'
import { capitalizeFirstLetter, getRequest } from '../requests/request'
import Realated from './Realated'

const Item = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
   const [img,setImg]=useState(0)
    const [item,setItem]=useState({_id:"6311db2cd1bd171a0f3fd692",userId:"6307811a77aefc21719b18d4",title:"Loading...","charges":"Loading...","chargesType":"hr","category":"Loading...","description":"Loading...","images":["img3_nmkyaz"],"email":"arbaazuniquegzp@gmail.com","city":"ghazipur","booked":false,"__v":0})
    const params=useParams()
    const {id}=params
    const getData=async ()=>{
        const response= await getRequest(`/getitem/${id}`)
        setItem(response)
        dispatch(setcurrentItem(response))

       
    }
    const confirm=()=>{
       navigate('/confirm')
    }
useEffect(()=>{
  window.scroll(0,0)
    getData()
 
    //console.log(`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${item.images[img]}`)
   
},[])
  return (
    <div>
        <div className='main-items'>
          <div className='item-images'>
          <Image cloudName='dwl4ftefk' className='item-main-image' publicId={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${item.images[img]}`}></Image>
           <div className='list-img'>
            {item.images.map((element,index)=>{
              return<Image onClick={()=>setImg(index)} cloudName='dwl4ftefk' publicId={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${element}`}></Image>

            })}

           </div>
          </div>

          <div className='item-information'>
            <h1>{capitalizeFirstLetter(item.title)}</h1>
            <h2>{item.category}</h2>
            <h3>Description</h3>
            <p className='description'>{item.description}</p>
           <div className='price-tag'><p className='price'><i className="bi bi-currency-rupee"></i> {item.charges}</p> <p>Charges type /{item.chargesType}</p></div> 
            <button onClick={confirm} className='light-btn book-btn'>Get item on rent</button>
          </div>
        </div>
        {/* <Realated category={item.category}/> */}
    </div>
  )
}

export default Item