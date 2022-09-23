import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { putRequest } from '../../requests/request'

const Updateuser = () => {
  const user=useSelector((state)=>state.user.value)
  const [newUser,setUser]=useState({name:user[0].name,city:user[0].city,adress:user[0].adress,contact:user[0].contact})
   const [alert,setAlert]=useState({type:'',message:'',show:''})
  const handleChange=(e)=>{
    setUser({...newUser,[e.target.name]:e.target.value})

 }
 const update=async(e)=>{
    e.preventDefault()
    setAlert({type:'warning',message:'Updating....',show:'show'})
     const response=await putRequest('/updateuser/'+user[0]._id,newUser)
     setAlert({type:'success',message:response.msg,show:'show'})

     setTimeout(()=>{
        setAlert({show:''})
     },4000)
 }
  return (
    <div className='signup-main' style={{padding:20,paddingTop:100}}>
 <div className={`alert alert-${alert.type} alert-dismissible fade ${alert.show}`} role="alert">
  {alert.message}
  <button type="button" className="btn btn-primary" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
            <form>
            <div className='wrapper-update' style={{width:'100%'}}>
            <div style={{width:'100%'}}>
            <h6><strong>Name</strong></h6>
            <input value={newUser.name} name='name' type='text'placeholder='full name'style={{width:'100%'}} onChange={handleChange}/>
            </div>
            </div>
            
            <div style={{width:'100%'}} className='wrapper-update'>
            <div style={{width:'100%'}}>
            <h6><strong>city</strong></h6>
            <input type='text' name='city' placeholder='city' value={newUser.city} style={{width:'100%'}}onChange={handleChange}/>
            </div>
            <div>
            <h6><strong>contact no.</strong></h6>
            <input  type='text' name='contact' placeholder='contact' value={newUser.contact} style={{width:'100%'}} onChange={handleChange}/>
            </div>
            </div>
            <div style={{width:'100%'}}>
            <h6><strong>Adress</strong></h6>
            <textarea name='adress' value={newUser.adress}onChange={handleChange}>

            </textarea>
            </div>
            <button onClick={update}>Update</button>
        </form>

    </div>
  )
}

export default Updateuser