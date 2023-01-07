import React from 'react'
import "./Footer.css"
import {FaMailBulk,FaPhone,FaSearchLocation} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:"#ffffff",marginRight:"2rem"}}/>
                </div>
                <div>
                    <p>3-13-40/2 </p>
                    <h4>surya nagar colony,mallapur,Hyderabad pin code:500076</h4>
                    <div className='phone'>
                        <h4> <FaPhone size={20} style={{color:"#ffffff",marginRight:"2rem"}}/>9700267828</h4></div> 
                </div>
                <div className='email'>
                    <h4><FaMailBulk/>pvnkmr2011@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About this Website</h4>
                <p>I integrated background autoplay video tag, I customize my navigation bar with react js with Mobile Response </p>
            </div>
            <div className='social'> </div>
        </div>
    </div>
  )
}

export default Footer