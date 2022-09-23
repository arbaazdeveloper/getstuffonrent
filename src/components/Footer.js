import React,{useState,useEffect} from 'react'

const Footer = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
   
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
       
      }
        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      },[windowSize])
  return (
    <div className={`footer ${windowSize.innerWidth<900?'text-center':''}`}>
       <div className='container-fluid footer-main-box'>
        <div className='row'>
            <div className='col-md-3 footer-box-1'>
                <h3>Contact Us</h3>
               <><p><i class="bi bi-geo-alt"> </i>Town Hall Ghazipur,<br></br>  Uttar Pradesh,India</p>
                <p><i class="bi bi-headset"></i> +919648315086</p>
                <p><i class="bi bi-envelope-open"></i> getstuffonrent@gmail.com</p></>
                
                
            </div>
                
            <div className='col-md-6 footer-box-2'>
                <div className='footer-mid-box'>
                <h3>About us</h3> 
                <div className='footer-list'>
                    <span><a href='#'>Contact Us</a></span>
                    <span><a href='#'>About Us</a></span>
                    <span><a href='#'>Careers</a></span>
                    <span><a href='#'>Stories</a></span>
                </div>

                </div>
                <div className='footer-mid-box'>
                <h3>Help</h3>
                <div className='footer-list'>
                    <span><a href='#'>Payments</a></span>
                    <span><a href='#'>Shipping</a></span>
                    <span><a href='#'>Cancellation</a></span>
                    <span><a href='#'>Report Infringement</a></span>
                    <span><a href='#'>FAQ</a></span>
                </div>
                
                </div>
                <div className='footer-mid-box'>
                <h3>Policy</h3>
                <div className='footer-list'>
                    <span><a href='#'>Terms Of Use</a></span>
                    <span><a href='#'>Security</a></span>
                    <span><a href='#'>Privacy</a></span>
                    <span><a href='#'>Sitemap</a></span>
                </div>

                </div>

            </div>
    
            <div className='col-md-3 footer-box-3'>
                     <h3>Subscribe Now</h3>
                     <p>Subscribe to our newsletterget 10% off your first purchase at here for update.</p>
                     <div className='subscribe-box'>
                     <input></input>
                     <button><i class="bi bi-send"></i></button>
                     </div>
            </div>
        </div>

       </div>
       <div className='footer-bottom'>
          <p>Copyright &copy;</p>
       </div>
    </div>
  )
}

export default Footer