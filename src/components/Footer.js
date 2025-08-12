import React from 'react'
import "../styles.css";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
        <div className='footer-text'>
            <p>© {year} Movie App. All rights reserved.</p> 
            <p>Created by Surya Vinay</p>
            </div>
      
    </div>
  )
}

export default Footer
