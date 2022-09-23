import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef } from 'react';

const Homeproduct = (props) => {
    const ref=useRef()
    const {title,list}=props
    const[next,setNext]=useState(0)
    const handleNext=()=>{
        const width=ref.current.offsetWidth
        if(next<=-width){
            setNext(0)
        }
        else{

            setNext(next-100)
        }
        
    }
    const handlePrev=()=>{
        if(next===0){
            setNext(0)
        }
        else{

            setNext(next+100)
        }
      
        
    }
  return (
    <div className='home-products'>
        <div className='container'>
            <div className='home-product-btn'>
            <h3 style={{fontFamily:'arial'}}>{title}</h3>
            <div>
            <button onClick={handlePrev}><i class="bi bi-arrow-left-short"></i></button>
            <button onClick={handleNext}><i class="bi bi-arrow-right-short"></i></button>
            </div>
            </div>
            <hr className='product-line'></hr>
            <div  className='home-product-list' ref={ref}>
                {list.map((item)=>{
                    return <>
                       <div className='product' style={{ transition:'0.2s ease',transform:`translateX(${next}px)`}}>
                    <div className='product-img'>
                    <img src={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1661953957/${[item.images[0]]}`}></img>
                    </div>
                    <h6>{item.title}</h6>
                    <strong style={{fontWeight:1200}}><i className="bi bi-currency-rupee"></i> {item.charges}</strong>
                </div>
                    </>
                })}
             

            </div>
        </div>
    </div>
  )
}

export default Homeproduct