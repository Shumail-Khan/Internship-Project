import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between mt-40'>
        <div className='mt-5'>
            <img src="/src/assets/logo.svg" alt="" />
            <p className='text-gray-900 mt-7 text-sm w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book.</p>
        </div>
        <div className='mt-7'>
            <h1 className='font-bold'>COMPANY</h1>
            <ul className='flex flex-col mt-7'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='flex flex-col mt-7 '>
            <h1 className='font-bold'>GET IN TOUCH</h1>
            <p className='mt-7'>+1-212-456-7890</p>
            <p>greatstackdev@gmail.com</p>
        </div>
    
    </div>
    <div className='text-center font-lg mt-10  border-t-1'>
        <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer