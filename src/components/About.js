import React from 'react'
import { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <div className='container about-us'>
        <h1 className='text-center' style={{fontFamily:'system-ui' ,marginBottom:'100px'}}>About <br></br><strong className='line'>_</strong></h1>
      <div className='about-us-main'>
        <div className='row'>
          <div className='col-md-6'>
            <img src='https://res.cloudinary.com/dwl4ftefk/image/upload/v1662558938/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1_ztt4dn.jpg'></img>
          </div>
          <div className='col-md-6'>
          <h1 style={{fontFamily:'system-ui'}}>What we do <br></br><strong className='line'>-</strong></h1>
          <p style={{fontFamily:'system-ui', fontSize:'20px'}}>
            GetStuffOnRent is a company that rents out anything. You can offer your items for rent, such as dresses, household appliances, electronics, autos, etc., for a fee. You can also find any item for rent in your City. Our company's primary goal is to give our clients with rented things in their respective cities.
            The main objective of this website is to provide our
customers' items such as pricey suits and expensive
Dresses or any other stuff on Rent in their respective
cities.
            </p>
          </div>
        </div>

        <div className='about-content row'>
         
          
          <div className='about-para col-md-6'>
          <h1 style={{fontFamily:'system-ui'}}>About us <br></br><strong className='line'>-</strong></h1>
          <p>On July 9, 2022, our company entered the market as a startup. Arbaaz Ahmad founded the business as a renting option, and today it serves more than 1000 clients. Currently, we serve more than 100 clients each day.</p>
          <strong style={{fontFamily:'system-ui'}}>Our Mission</strong>
          <p>Make our customer aware that taking stuffs on rent is next best option to buy that stuff. ethical corporate practises, and client growth.</p>
         <p>Provide a friendly and reliable customer service in
order to establish a loyal customer base.
To make it worth for both Stuff provider and stuff
renter. And for the company too.</p>
          </div>
          <div className='col-md-6'>

<img src="https://res.cloudinary.com/dwl4ftefk/image/upload/v1662211610/White_Baking_Logo_-_Made_with_PosterMyWall__1_-removebg-preview_yiu2lb.png"></img>
</div>

        </div>
      </div>
      <div className='row'>
      <h1 className='text-center' style={{fontFamily:'system-ui' ,marginBottom:'100px'}}>Our Company <br></br><strong className='line'>_</strong></h1>
        <div className='col-md-4 company-discs'>
        <i class="bi bi-mortarboard"></i>
        <h3>Employees</h3>
        <p>Currently, our company has 50 teams of employees, and we are working hard to ensure that our customers are happy with our service.</p>
        </div>

        <div className='col-md-4 company-discs'>
        <i class="bi bi-people"></i>
        <h3>Customers</h3>
        <p>We serve more than 50 to 100 customers daily out of our list of more than 1000 customers.Our motto is "fast and safe service."</p>
        </div>
        <div className='col-md-4 company-discs'>
 
        <i class="bi bi-person-workspace"></i>
        <h3>Partners</h3>
        <p>After clients and staff, a business is nothing without partners . and we have more than 6 project trusted partners from different departments including security, finance, and delivery.</p>
        </div>

      </div>
    </div>
  )
}

export default About