import React from 'react'
import { NavLink } from 'react-router-dom'



const Nav = () => {
  return (
    <div className='flex justify-between items-center py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src='/Images/logo.svg' alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium '>
            <NavLink  to="/">
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w/35 m-auto' />
            </NavLink>
            
            <NavLink to="/docter">
                <li className='py-1'>All DOCTER</li>
                <hr className='border-none outline-none h-0.5 bg-primary w/35 m-auto' />            
            </NavLink>
            <NavLink  to="/about">
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w/35 m-auto' />
            </NavLink>
            <NavLink  to="/contact">
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w/35 m-auto' />
            </NavLink>
        </ul>
        <div>
            <button className='bg-blue-600 rounded-4xl p-2'>Create Account</button>
        </div>
    </div>

  )
}

export default Nav