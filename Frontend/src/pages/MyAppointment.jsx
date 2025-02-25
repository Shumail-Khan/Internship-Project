  import React from 'react'
import Docter from './Docter'
import {useNavigate } from 'react-router-dom'


  const MyAppointment = () => {
    const navigate= useNavigate()
    return (
      <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='text-center mt-5 font-medium'>Simply browse through our extensive list of trusted doctors, schedule <br /> your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
          <div className='flex gap-5'>
            <div onClick={()=>navigate('docter')} className='hover:translate-y-[-10px] transition-all duration-500'>
                <img className='h-25 '  src="/Images/General_physician.svg" alt="" />
                <p className='mt-3 '>General physician</p>
            </div>
            <div onClick={()=>navigate('docter')} className='hover:translate-y-[-10px] translation-all duration-500'>
                <img className='h-25' src="/Images/Gynecologist.svg" alt="" />
                <p className='mt-3 '>Gynecologist</p>
            </div>
            <div  onClick={()=>navigate('docter')} className='hover:translate-y-[-10px] translation-all duration-500'>
              <img className='h-25' src="/src/assets/Dermatologist.svg" alt="" />
              <p className='mt-3 '>Dermatologist</p>
            </div>
            <div onClick={()=>navigate('docter')} className='hover:translate-y-[-10px] translation-all duration-500'>
              <img className='h-25' src="/src/assets/Pediatricians.svg" alt="" />
              <p className='mt-3'>Pediatricians</p>
            </div>
            <div onClick={()=>navigate('docter')} className='hover:translate-y-[-10px] translation-all duration-500'>
              <img className='h-25' src="/Images/Gastroenterologist.svg" alt="" />
              <p className='mt-3'>Gastroenterologist</p>
            </div>
            <div onClick={()=>navigate('docter')} className='hover:translate-y-[-10px] translation-all duration-500'>
              <img className='h-25' src="/Images/Neurologist.svg" alt="" />
              <p className='mt-3'>Neurologist</p>
            </div>
          
          
          </div>


        
        </div>
          
      </div>
    )
  }

  export default MyAppointment