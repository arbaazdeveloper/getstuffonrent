import React, { useEffect, useState } from 'react';
import bike from '../assets/bike.jpg'
import kitchen from '../assets/kitchen.jpg'
import dress from '../assets/dress.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])


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
            <div style={{ width: '100%', height: '100%', position: 'absolute', background: '#000', opacity: '0.5' }}></div>
            <div className='banner-title'>
              <h1 data-aos="fade-up" data-aos-delay='100'>Get Your stuff </h1>
              <h2 data-aos="fade-up" data-aos-delay='200'> Rental Kitchen Appliances</h2>
              <p data-aos="fade-up" data-aos-delay='300' >The stuffs at affordable price</p>
              <button className='banner-btn'>Get Now</button>
            </div>

            <img className="d-block w-100" style={{ height: 'auto' }} src={kitchen} alt="First slide" />
          </div>
          <div className="carousel-item">
            <div style={{ width: '100%', height: '100%', position: 'absolute', background: '#000', opacity: '0.5' }}></div>
            <div className='banner-title'>
              <h1>Get Your stuff </h1>
              <h2>Rental Wedding Dresses</h2>
              <p>The Best Rental Stuffs</p>
              <button className='banner-btn'>Get Now</button>
            </div>
            <img className="d-block w-100" src={dress} alt="Second slide" />
          </div>
          <div className="carousel-item">

            <div style={{ width: '100%', height: '100%', position: 'absolute', background: '#000', opacity: '0.5' }}></div>
            <div className='banner-title'>
              <h1>Get a Sports Bike On Rent </h1>
              <h2>KTM 360 On Rent</h2>
              <p>Get Best sports bikes on rent hourly or daily on affordable charges</p>
              <button className='banner-btn'>Get Now</button>
            </div>
            <img className="d-block w-100" src={bike} alt="Third slide" />
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