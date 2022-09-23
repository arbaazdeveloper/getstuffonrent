import Moment from 'moment'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../requests/request'

const Homeblog = () => {
    const[blogs,setBlogs]=useState([])
    const getData= async()=>{
        const data=await getRequest('/getallblogs')
        setBlogs(data)
    }
    const setDate=(date)=>{
        const map=new Map()
        map.set('01','January')
        map.set('02','February')
        map.set('03','March')
        map.set('04','April')
        map.set('05','May')
        map.set('06','June')
        map.set('07','July')
        map.set('08','August')
        map.set('09','September')
        map.set('10','October')
        map.set('11','November')
        map.set('12','December')
        const myDate=date.split('-')
        const getMonth=map.get(myDate[1])
        return myDate[0]+' '+getMonth+','+myDate[2]

    }
    useEffect(()=>{
        getData()
       
    },[])
  return (
    <div className='container' style={{paddingTop:100}}>
        <h3 style={{fontFamily:'system-ui'}}>From The Blogs</h3>
        <hr></hr>
        <div className='home-blogs'>
        {
        blogs.map((item)=>{
            return<div className='blog-container'>
                <div>
                <img src={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1662982030/${item.image}`}></img>

                </div>
                <div className='blog-info'>
            <h1>{item.title}</h1>
            <p className='date'>{setDate(Moment(item.date).format('DD-MM-YY'))}</p>
            <p>{item.description.slice(0,100)}......</p>
                </div>
            </div>
        })
        
        }
        </div>
     </div>
  )
}

export default Homeblog