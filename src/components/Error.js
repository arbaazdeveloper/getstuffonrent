import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container error-page'>
          <div className='errorCode404'>
        <span>4</span>
        <span>0</span>
        <span>4</span>
       </div>

       <h1 style={{fontFamily:'system-ui'}}>Ooops</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does't exist</p>
        <Link to='/'>Go back</Link>
     
    </div>
  )
}

export default Error