import React from 'react'
import'./Jacky.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div >
        <div className='vf'>
        <div className='gh'>
            <h3>Contact Us</h3>
            <form action="">
            <input type="text" placeholder='Your Name' style={{height:'10px'}} /><br />
            <input type="Email" placeholder='Your Email' style={{height:'10px'}}/><br />
            <label htmlFor="message"></label>
            <textarea name="message" id="message" rows="3" cols="21" placeholder='Your Message' style={{height:'30px'}}></textarea><br />
            <button>Send Message</button>
            </form>
        </div>
        <div className='hu'>
            <div className='lk'>
            <FaLocationDot /><span>Address</span><br />
            <span>Main,Street,Pune,Maharashtra,India.</span><br /><br />
            <span><MdEmail />Email</span><br />
            <span>info44@email.com</span><br /><br />
            <span><FaPhoneAlt />Phone</span><br />
            <span>+91 9897969594</span>
            </div>
        </div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default Contact