import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
function Header() {
  const navigator = useNavigate();
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <div className='flex justify-between fixed top-0 left-0 w-full z-50 bg-red-900 mb-10 items-center p-5'>
        <img src="logo.png" alt="" height={150} width={150} />
        <ul className='hidden lg:flex items-center gap-8 text-lg  text-white font-semibold p-5'>
          <li onClick={() => navigator('/')} className='cursor-pointer'>HOME</li>
          <li onClick={() => navigator('/about')} className='cursor-pointer'>ABOUT</li>
          <li onClick={() => navigator('/ourmenu')} className='cursor-pointer'>MENU</li>
          <li onClick={() => navigator('/shop')} className='cursor-pointer'>SHOP</li>
          <li onClick={() => navigator('/blog')} className='cursor-pointer'>BLOG</li>
          <li onClick={() => navigator('/contact')} className='cursor-pointer'>CONTACT</li>
          <li><FaCartArrowDown /></li>
        </ul>
        {
          MobileMenu ?
          <IoMdArrowDropupCircle className='lg:hidden text-white cursor-pointer' size={30} onClick={()=>setMobileMenu(false)} /> :
          <IoMdArrowDropdownCircle className='lg:hidden text-white cursor-pointer' size={30} onClick={() => setMobileMenu(true)} />
        }
      </div>
    </div>
  )
}
export default Header