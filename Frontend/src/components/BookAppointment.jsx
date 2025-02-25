import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookAppointment = () => {
  const navigate = useNavigate()
  return (
    <div className='flex  h-[360px] w-full bg-blue-600 mt-25 rounded-xl'>
        <div className='w-1/2 px-14  pt-30'>
            <h1 className='font-bold text-white w-full font-stretch-50% text-5xl'>Book Appointment</h1>
            <h1 className='font-bold text-white w-full text-3xl mt-5'>With 100+ Trusted Doctors</h1>
            <button
            onClick={()=>{navigate('/login');scrollTo(0,0)}} 
            className='bg-white  rounded-full px-4 py-3 mt-8'>Create Account</button>
        </div>
        <div className='w-1/2 '>
            <img className='h-full ml-20 ' src="/src/assets/appointment_img.png" alt="" />
        </div>

    </div>
  )
}

export default BookAppointment