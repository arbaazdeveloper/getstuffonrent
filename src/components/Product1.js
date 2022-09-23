import React from 'react'
import Homeproduct from './Homeproduct'

const Product1 = () => {
const list=[
    {title:'similique sunt in culpa',
    charges:'89',
    images:['9_tyfqic']
  },
{title:'similique sunt in culpa',
charges:'89',
images:['3_mgohrm']
},
{title:'similique sunt in culpa',
charges:'89',
images:['7-600x844_zpangp']
},
{title:'similique sunt in culpa',
charges:'89',
images:['9_tyfqic']},
{title:'similique sunt in culpa',
charges:'89',
images:['3_mgohrm']
},
{title:'similique sunt in culpa',
charges:'89',
images:['7-600x844_zpangp']
},
{title:'similique sunt in culpa',
charges:'89',
images:['9_tyfqic']
},
{title:'similique sunt in culpa',
charges:'89',
images:['9_tyfqic']
},
]
  return (
    <div>
        <Homeproduct list={list}  title={"Best And Fresh Stuffs"}/>
    </div>
  )
}

export default Product1