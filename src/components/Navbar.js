import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Dropdown,Menu} from 'antd';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from 'react-router-dom';
import { setIsAuth } from '../redux-feature/isauth';
import Categorylist from '../List/category';
import { setUser } from '../redux-feature/user';
const Navbar = () => {
  const isAuth=useSelector((state)=>state.isAuth.value)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [searchQuery,setQuery]=useState('')
  const logout=()=>{
    localStorage.removeItem('loginkey')
    dispatch(setIsAuth({login:false}))
    dispatch(setUser({}))
    navigate('/')
    
  }
    const newmen = (
       isAuth.login?<Menu
       items={[
     
         {
           key: '2',
           label: (
             <Link to='/dashboard/list-item' >
              Profile
             </Link>
           ),
         },
         {
           key: '3',
           label: (
             <Link onClick={logout} to='/'>
               Logout
             </Link>
           ),
         },
       ]}
     />:
        <Menu
          items={[
        
            {
              key: '2',
              label: (
                <Link to='/login' >
                 login
                </Link>
              ),
            },
            {
              key: '3',
              label: (
                <Link to='/signup'>
                  Sign up
                </Link>
              ),
            },
          ]}
        />
      );
    const menu = (
<Menu
items={Categorylist.map((e,index)=>{ return {key:index+1,label:(<Link to={`/search/${e}`}>{e}</Link>)} })} />
      );
      const searchResult=(e)=>{
        e.preventDefault()
        if(searchQuery===""){
          alert('please fill something to show ')
          return
        }
        navigate(`/search/${searchQuery}`)
      }
  return (
    <div className='nav-bar'>
        <hr className='nav-line'></hr>
        <div className='container'>
        <div className='nav-elements'>
            <div className='row'>
                <div className='col-md-2'>
               <div className='categories'>
               <Dropdown  overlay={menu} placement="bottomLeft">
           <div className='text-center'>
             <button className='drop-items'>
             <i className="bi bi-list-task"></i> Categories
                </button>
           </div>
        </Dropdown>
               </div>
                </div>
                <div className='col-md-8'>
                <div className='search'>
                <form>
                    <input type='text' value={searchQuery} onChange={(e)=>setQuery(e.target.value)} className='search-input' placeholder='Search Stuffs'></input>
                    <button onClick={searchResult}>Search</button>
                </form>
            </div>
                   
                </div>
                <div className='col-md-2'>
                    <div className='side'>
                    <Dropdown  overlay={newmen} placement="bottomLeft">
           <div className='text-center'>
             <button>
             <i class="bi bi-person"></i>
             Account
                </button>

           </div>
        </Dropdown>
                   
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar