import React from 'react';

const Nav = () => {
  return (
    <nav className='flex h-16 justify-between items-center bg-white text-black relative shadow-sm hover:shadow-lg font-mono sticky top-0' role='navigation'>
      <h1 className='text-2xl ml-8'>Essa Raza</h1>
      <ul className='flex gap-4 text-lg mr-8 justify-end cursor-pointer'>
        <li className='text-xl hover:font-bold hover:text-red-500'>Home</li>
        <li className='text-xl hover:font-bold hover:text-red-500'>Features</li>
        <li className='text-xl hover:font-bold hover:text-red-500'>Projects</li>
        <li className='text-xl hover:font-bold hover:text-red-500'>Resume</li>
        <li className='text-xl hover:font-bold hover:text-red-500'>Testimonial</li>
        <li className='text-xl hover:font-bold hover:text-red-500'>Contact</li>
      </ul>
     
    </nav>
  );
};

export default Nav;