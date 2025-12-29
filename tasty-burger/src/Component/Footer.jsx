import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs"; 
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className='flex flex-wrap justify-between p-10'>
        {/* location */}
        <div className='p-5'>
          <h1 className='font-semibold text-xl pb-3'>LOCATION</h1>
          <p>123 Food Street,<br></br> Burger City, BC 12345</p>
        </div>
        {/* work hours */}
        <div className='p-5'>
          <h1 className='font-semibold text-xl pb-3'>WORK HOURS</h1>
          <p>Mon-Fri: 10:00 AM - 10:00 PM</p>
          <p>Sat-Sun: 11:00 AM - 11:00 PM</p>
        </div>
        {/* order now */}
        <div className='p-5'>
          <h1 className='font-semibold text-xl pb-3'>ORDER NOW</h1>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@tastyburger.com</p>
        </div>
        {/* social media */}
        <div className='p-5'>
          <h1 className='font-semibold text-xl pb-3'>FOLLOW US</h1>
          <div className='flex flex-wrap justify-between gap-5 text-red-600'>
            <FaFacebook onClick={()=>window.open('https://www.facebook.com/')} className='cursor-pointer'/>
            <BsInstagram onClick={()=>window.open('https://www.instagram.com/')} className='cursor-pointer'/>
            <FaYoutube onClick={()=>window.open('https://www.youtube.com/')} className='cursor-pointer'/>
            <FaTwitter onClick={()=>window.open('https://www.twitter.com/')} className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer