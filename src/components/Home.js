import React from 'react'
import { useEffect } from 'react'
import Banner from './Banner'
import Homeblog from './Homeblog'
import Product1 from './Product1'
import Product2 from './Product2'

const Home = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div>
        <Banner />
        <Product1 />
        <Product2/>
        <Homeblog/>
    </div>
  )
}

export default Home