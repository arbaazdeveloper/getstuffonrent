import React, { useState } from 'react'
import { getRequest } from '../requests/request'
import Moment from 'moment'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
const Blog = () => {
  const [blogs,setBlogs]=useState([])
  const[loading,setLoading]=useState(<Spinner/>)

  const getBlogs=async ()=>{
    const response=await getRequest('/getallblogs')
    setBlogs(response)
    setLoading('')
  }
  useState(()=>{
    getBlogs()
    window.scroll(0,0)
  },[])
  return (
    <div className='blogs'>
   <div className='blogs-list'>
    {loading}
   {blogs.map((item)=>{
        return <>
        <div className='blogs-card'>
        <img src={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1662982030/${item.image}`}/>
        <div className='blog-info'>
        <h3>{item.title}</h3>
        <p><i className="bi bi-calendar"></i> {Moment(item.date).format('DD-MM-YY')}</p>
       <p>{item.description.slice(0,180)}......</p>

       <Link to='/'>Read More</Link>
        </div>
        </div>
        </>
       })}
   </div>
    </div>
  )
}

export default Blog