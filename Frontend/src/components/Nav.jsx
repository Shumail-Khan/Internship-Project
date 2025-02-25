import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';



const Nav = () => {
  
    const navigate =useNavigate()
    const [token,setToken] = useState(true)
  return (
    <div className='flex justify-between items-center py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src='/Images/logo.svg' alt="" />
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
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('myProfile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('myAppointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
            </div>
            :<button onClick={()=> navigate('/Login')} className='bg-blue-600 rounded-full px-8 py-3 font-light hidden md:block text-white'>Create Account</button>  
        }
        
      </div>
    </div>
  );
};

export default Nav;