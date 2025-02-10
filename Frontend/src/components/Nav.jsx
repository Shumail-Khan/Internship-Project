import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Nav = () => {
    const navigate =useNavigate()
    const [token,setToken] = useState(false)
  return (
    <div className='flex justify-between items-center py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src='/Images/logo.svg' alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/" exact>
          {({ isActive }) => (
            <li className={`py-1 ${isActive ? 'border-b border-b-blue-600 ' : ''}`}>
              HOME
            </li>
          )}
        </NavLink>

        <NavLink to="/docter">
          {({ isActive }) => (
            <li className={`py-1 ${isActive ? 'border-b border-b-blue-600' : ''}`}>
              All DOCTER
            </li>
          )}
        </NavLink>

        <NavLink to="/about">
          {({ isActive }) => (
            <li className={`py-1 ${isActive ? ' border-b border-b-blue-600' : ''}`}>
              ABOUT
            </li>
          )}
        </NavLink>

        <NavLink to="/contact">
          {({ isActive }) => (
            <li className={`py-1 ${isActive ? 'border-b border-b-blue-600' : ''}`}>
              CONTACT
            </li>
          )}
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='rounded-full w-8' src="/Images/profile_pic.png" alt="" />
                <img className='w-2.5' src="/Images/dropdown_icon.svg" alt="" />
            </div>
            :<button onClick={()=> navigate('/Login')} className='bg-blue-600 rounded-full px-8 py-3 font-light hidden md:block text-white'>Create Account</button>  
        }
        
      </div>
    </div>
  );
};

export default Nav;