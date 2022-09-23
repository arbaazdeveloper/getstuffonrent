import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getRequest } from '../requests/request'
import { Image } from 'cloudinary-react'
import { capitalizeFirstLetter } from '../requests/request';
import Spinner from './Spinner';


const Searcheditem = () => {
    const { query } = useParams()
    const [items, setItems] = useState([])
    const [message, setMessage] = useState(<Spinner/>)
    const navigate = useNavigate()
    const getItems = async () => {
        const response = await getRequest(`/searchresult/${query}`)
        if (response.msg === "no result found") {
            setMessage(response.msg)
            setItems([])
            return
        }
        setMessage('')
        setItems(response)
    }
    useEffect(() => {
        getItems()
        window.scroll(0,0)
    }, [query])
    return (
        <div className='results-area'>
            {/* <div>
              <input type="checkbox" onChange={(e)=>itemFilter(e)} value="500"></input>
            </div> */}
            <div className='search-results'>
           
                <h1 className='not-found-message'>{message}</h1>
                <div className='results-list'>
                    {items.map((i) => {
                        return <div key={i._id} className='item-cards' >
                            <Image cloudName='dwl4ftefk' publicId={`https://res.cloudinary.com/dwl4ftefk/image/upload/v1659520656/${i.images[0]}`}></Image>
                            <h2 onClick={() => navigate(`/item/${i._id}`)}>{capitalizeFirstLetter(i.title)}</h2>
                            <p>{i.description.slice(0, 20)}....</p>
                            <p><strong><i className="bi bi-currency-rupee"></i> {i.charges} /{i.chargesType}</strong></p>
                            <button onClick={() => navigate(`/item/${i._id}`)} className='light-btn book-btn'>Get on rent</button>
                        </div>

                    })}</div>
            </div>

        </div>
    )
}

export default Searcheditem