import React, { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef } from 'react';
import PrimaryCard from './cards/PrimaryCard';
import { getRequest } from '../requests/request';

const Homeproduct = (props) => {
    const ref=useRef();
    const [homeProducts,setHomeProducts]=useState([]);
    const getHomeProduct=async ()=>{
        const response= await getRequest('/home-item')
        setHomeProducts(response)
    }
    useEffect(()=>{
        getHomeProduct()
    },[])
   
   
  return (
    <div className='home-products'>
        <div className='container'>
            <h1>Trending items for rent</h1>
            <hr className='product-line'></hr>
          
        </div>
        <div className='home-card-container'>
            {homeProducts.map((item)=>{
                return <>
                <PrimaryCard title={item.title} id={item._id} images={item.images} charges={item.charges} chargesType={item.chargesType}/>
                </>
            })}

        
        {/* <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/>
        <PrimaryCard/> */}
        </div>
    </div>
  )
}

export default Homeproduct