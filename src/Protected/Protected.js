import React from 'react'
import Login from '../components/Login'

const Protected = (props) => {
    const{isAuth,Component}=props
    if(isAuth){
        return Component
        
    }
    else{
        return <Login />
    }
}

export default Protected