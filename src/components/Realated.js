import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getRequest } from '../requests/request'
import Homeproduct from './Homeproduct'


const Realated = (props) => {
    const{category}=props
    const [list,setList]=useState([])
    const getList=async()=>{
        const response = await getRequest(`/searchresult/${category}`)
        setList(response)
    }
    useEffect(()=>{
        getList()
    },[])
  return (
    <div>
        <Homeproduct list={list} title={`Related`} />
    </div>
  )
}

export default Realated