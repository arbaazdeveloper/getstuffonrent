import React from 'react'
import { useEffect } from 'react'
import Banner from './Banner'
import Homeblog from './Homeblog'
import Product1 from './Product1'
import Product2 from './Product2'
import Categoryview from './CategoryView/Categoryview'
import Solutions from './Solution/Solutions'

const Home = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div>
        <Banner />
        <Categoryview/>
        <Product1 />
        <Solutions/>
        <Product2/>
        <Homeblog/>
    </div>
  )
}

export default Home