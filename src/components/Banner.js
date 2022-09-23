import React, { useEffect, useState } from 'react';



const Banner = () => {
    
 
 
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
   
    <div className="carousel-item active">
        <div className='banner-title'>
        <h1>Get Your stuff </h1>
        <h2>Rental Kitchen Appliances</h2>
        <p>The stuffs at affordable price</p>
        <button className='banner-btn'>Get Now</button>
        </div>
        
      <img className="d-block w-100" src="https://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Sub-banner-01.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
    <div className='banner-title'>
        <h1>Get Your stuff </h1>
        <h2>Rental Decorative Stuffs</h2>
        <p>The Best Rental Stuffs</p>
        <button className='banner-btn'>Get Now</button>
        </div>
      <img className="d-block w-100" src="https://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Sub-banner-02.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
    <div className='banner-title'>
        <h1>Get Your stuff </h1>
        <h2>Rental Dinner Sets</h2>
        <p>With Best Security</p>
        <button className='banner-btn'>Get Now</button>
        </div>
      <img className="d-block w-100" src="https://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-01.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div> 
    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEaV7TTGwZwchcu9F0reS7Xe0XrNnZkbCwA&usqp=CAU'></img> */}
    </div>
  )
}

export default Banner