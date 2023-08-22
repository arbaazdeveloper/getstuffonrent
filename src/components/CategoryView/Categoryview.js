import React from 'react'
import './cat.css'
import { ChairIcon, DressIcon, MobileIcon, ToolsIcon, VehicleIcon } from '../../assets/Icons'
const Categoryview = () => {

    const list=[
    {
        name:'Dress',
        icon:DressIcon,
        id:'a'
    },
    {
        name:'Electronics',
        icon:MobileIcon,
        id:'b'
    },
    {
        name:'Decoratives',
        icon:ChairIcon,
        id:'c'
    },
    {
        name:'Vehicles',
        icon:VehicleIcon,
        id:'d'
    },
    {
        name:'Tools',
        icon:ToolsIcon,
        id:'e'
    }
]
    const CategoryListBtn=({name,Icon})=>{
        return<>
        <div className='category-list-btn'>
                <div className='icon-container'>

                    {/* <MobileIcon /> */}
                    <Icon/>
                </div>
                <span>{name}</span>
            </div>
        </>
    }
    return (
        <div className='category-view-list'>
            {list.map((item)=><CategoryListBtn key={item.id} name={item.name} Icon={item.icon}/>)}
        </div>
    )
}

export default Categoryview