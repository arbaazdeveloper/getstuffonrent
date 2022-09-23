import { Select } from 'antd'
import { Image } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { capitalizeFirstLetter, deleteRequest, getRequest, putRequest } from '../../requests/request'
import Categorylist from '../../List/category'
import Spinner from '../../components/Spinner'

const { Option } = Select;
const Youritems = () => {
  const ref = useRef();
  const closeRef=useRef();
  const [item, setItems] = useState([])
  const [message, setMessage] = useState({ message: '', found: true })
  const[loading,setLoading]=useState(<Spinner/>)
  const [update, setUpdate] = useState({_id:'', title: '', charges: '', category: '', chargesType: '', description: '', images: [] })
  const getData = async () => {
    const res = await getRequest('/youritems')
    if (res.msg) {
      setMessage({ message: res.msg, found: false })
      setLoading('')
      return
    }
    setItems(res)
    setLoading('')
  }
  const deleteItem = async (id) => {
    const cnf = window.confirm("Do you want to delete this item")
    if (cnf) {
      const deleteMyItem = await deleteRequest('/deleteitem/' + id)
      getData()
    }
  }
  const setUpdateItem = (id) => {
    const found = item.find((element) => element._id === id)
    setUpdate({_id:id, title: found.title, charges: found.charges, category: found.category, chargesType: found.chargesType, description: found.description, images: found.images })
    ref.current.click()
  }
  const handleChange2 = (e) => {
    setUpdate({...update,[e.target.name]:e.target.value})
    
  }
  const doUpdate=async()=>{
    if(update.title===""||update.charges===""){
      alert('Fields cannot be empty')
      return
    }
   const responses=await putRequest(`/updateitem/${update._id}`,update)
    getData()
    closeRef.current.click()
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='profile-mid-item'>
      {loading}
      <div className=''>
        <h1 className={message.found ? '' : 'not-found'} style={{ position: 'relative', top: '40%' }}>{message.message}</h1>
        <div className='your-items'>
          <div className='items'>
            {item.map((i) => {
              return <div key={i._id} className='cards'>
                <Image cloudName='dwl4ftefk' publicId={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${i.images[0]}`}></Image>
                <h2>{capitalizeFirstLetter(i.title)}</h2>
                <p><strong><i className="bi bi-currency-rupee"></i> {i.charges} /{i.chargesType}</strong></p>
                <p style={{ color: 'green', fontWeight: 'bold' }}>{i.booked ? 'Booked' : ''}</p>
                <Link to={`/item/${i._id}`}>{!i.booked ? <i data-hover="view" className="bi bi-eye"></i> : ''}</Link>
                <div className='card-botton'>
                  <button className='link-btn' onClick={() => { setUpdateItem(i._id) }}><i className="bi bi-pencil"></i></button>
                  <button onClick={() => deleteItem(i._id)} className='link-btn'><i className="bi bi-trash3"></i></button>
                </div>
              </div>

            })}</div>
        </div>
      </div>
      <button type="button" ref={ref} className="btn btn-primary" style={{ display: 'none' }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>


      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Update your item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input value={update.title} name="title" onChange={handleChange2}/>
              <input value={update.charges} name="charges" onChange={handleChange2} />
              <div className='update-select'>
                <select name="category" onChange={handleChange2}>
                  <option value={update.category}>{update.category}</option>
                  {Categorylist.map((item)=>{
                    return<>
                    <option value={item}>{item}</option>
                    </>
                  }) }
                </select>
                <select name="chargesType" onChange={handleChange2}>
                  <option value={update.chargesType}>{update.chargesType}</option>
                  <option value="hr">/hr</option>
                  <option value="day">/day</option>
                  <option value="month">/month</option>
                  <option value="year">/year</option>
                
                </select>
              </div>
              <textarea value={update.description} name="description" onChange={handleChange2}></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" ref={closeRef} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={doUpdate} className="light-btn">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youritems