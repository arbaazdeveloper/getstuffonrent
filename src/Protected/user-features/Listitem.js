import React, { useState } from 'react'
import  Axios  from 'axios'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { postRequest } from '../../requests/request';
import Categorylist from '../../List/category';
const { Option } = Select;

const Listitem = (props) => {
    const {user}=props
    const [data,setData]=useState({name:"",charges:"",description:""})
    const [chargesType,setChargesType]=useState("")
    const [category,setCategory]=useState("")
    const [message,setMessage]=useState("")
    const [selctedImages,setSelected]=useState([])
  // const fileArray=[]
  const [fileArray,setFileArray]=useState([])
    const addFile=(e)=>{
        setFileArray([...fileArray,e.target.files[0]])
      //  fileArray.push(e.target.files[0])
        setSelected([...selctedImages,URL.createObjectURL(e.target.files[0])])
        //console.log(fileArray)
       
    }
    const onChangeHandler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const handleChange1=(value)=>{
        setChargesType(value)

    }
    const handleChange2=(value)=>{
        setCategory(value)

    }
 
    const uploadImages=async (file)=>{
        console.log(fileArray)
        const Formdata=new FormData()
        Formdata.append('file',file)
        Formdata.append("upload_preset","rj6ga4au")
        const imgResponse=await Axios.post('https://api.cloudinary.com/v1_1/dwl4ftefk/image/upload',Formdata) 
        return imgResponse
    }

    
    const listItem=async(e)=>{
        e.preventDefault()
        if(data.name===""||data.charges===""||category===""||chargesType===""){
            alert('all fields are required')
            return
        }
        if(data.name.length<3){
            alert('name field should have 3 letters')
            return
        }
        setMessage("listing Your Item....")
        const responses=[]
        for(const res of fileArray){
          const imgUrl=await uploadImages(res)
          console.log(imgUrl)
          responses.push(imgUrl.data.public_id)
        }
      
        const details={
            name:data.name,
            charges:data.charges,
            chargesType:chargesType,
            category:category,
            description:data.description,
            images:responses,
            email:user.email,
            city:user.city

        }
        const listed=await postRequest('/listitem',details)
        if(listed)
        setMessage("your item listed succesfully")
    }
    return (
        <div className='profile-mid-item'>
            <h5 className={message==="your item listed succesfully"?'succsess-message':''}>{message}</h5>
            <div><h3><i class="bi bi-postcard"></i> List a item</h3></div>
            <div className='mid-item-box'>
                <form>
                    <h6><strong>Item Name</strong></h6>
                    <input type='text' name='name' placeholder='Name' value={data.name} onChange={onChangeHandler}/>
                    <h6><strong>Charges</strong></h6>
                    <input type='text' name='charges' placeholder='In rupee e.g 200' value={data.charges} onChange={onChangeHandler} />

                    <div className='wrapper'>
                        <div className='select-box'>
                        <h6><strong>Category</strong></h6>
                            <Select defaultValue="select" style={{ width: 120, }} onChange={handleChange2}>
                                <Option value="electronic">Electronic</Option>
                                <Option value="tool">Tool</Option>
                                <Option value="dress">Dress</Option>
                                {Categorylist.map((item)=>{
                                    return<>
                                   <Option value={item}>{item}</Option>
                                    </>
                                })}
                            </Select>
                        </div>
                        <div className='select-box'>

                        <h6><strong>Charges type</strong></h6>
                            
                            <Select defaultValue="select" style={{ width: 120 }}onChange={handleChange1}>
                                <Option value="hr">/hr</Option>
                                <Option value="day">/day</Option>
                                <Option value="month">/month</Option>
                                <Option value="year">/year</Option>
                            </Select>
                        </div>
                    </div>

                    <h6><strong>Description</strong></h6>
                    <textarea name='description' maxLength="4096" value={data.description} onChange={onChangeHandler}>
                    </textarea>

                    
                            <div className='image-container'>{selctedImages.map((item)=>{
                                return <img src={item}/>
                            })}</div> 
                        <div>
                            <h6><strong>Photos</strong></h6>
                            <label htmlFor='photos' className='photos'>
                                <i class="bi bi-camera"></i>
                                <input type='file' onChange={addFile} placeholder='city' className='pics-in' id="photos" />
                            </label>
                             
                        <div>

                        </div>
                    </div>
                    <button onClick={listItem}>List item</button>
                </form>
            </div>
        </div>
    )
}

export default Listitem