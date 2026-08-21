import React from 'react'
import './Rocky.css'
import { IoColorPalette } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
const Service = () => {
  return (
    <div className='yu'>
        <div className='bn'><b>Our Services</b></div>
        <div className='rt'>
            <div className='lo'>
                <IoColorPalette /><br />
                <span><b>Web Design</b></span><br />
                <span>We design a beutiful and responsive website.</span>
            </div>
            <div className='yh'>
                <FaCode /><br />
                <span><b>Devlopment</b></span><br />
                <span>We build fast and modern web application.</span>
            </div>
            <div className='hi'>
                <GrAnnounce /><br />
                <span><b>Marketing</b></span><br />
                <span>We help you grow your bussiness online. </span>
            </div>
        </div>
        
    </div>
  )
}

export default Service