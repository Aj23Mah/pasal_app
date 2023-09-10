import React from 'react'
import './footer.css'
import Contact from './../../Pages/Contact';

const Footer = () => {

  
  return (
    <footer>
      <div className='container'>
        {/* <div className='row'> */}
          <div className="text_area">
            {/* <div className="logo"> */}
              <h3 className='text-white'>hardwarePasal</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non eligendi, excepturi odit suscipit nobis magni molestiae eius vitae magnam ex, esse quas voluptas ipsa.</p>
            {/* </div> */}
          </div>

          <div className="categories_area">
            <h4>Top Categories</h4>
            <ul>
              <li>Machines</li>
              <li>pipes & fittings</li>
              <li>Water Tanks</li>
              <li>Bathroom Accessories</li>
            </ul>
          </div>

          <div className="link_area">
            <h4>Useful Link</h4>
            <ul>
              <li><a>Shop</a></li>
              <li><a>Cart</a></li>
              <li><a>Contact</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>

          <div className="contact_area">
            <h4>Contact</h4>
            <ul>
              <li>Hiledol, Tarkeshwor-11, kathmandu</li>
              <li>+9898989898</li>
              <li>example123@gmail.com</li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer