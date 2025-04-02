import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='text-center font-medium pt-10 text-2xl'>
          CONTACT <span className='text-gray-800 text-3xl'>US</span>
        </div>
        <div className='flex 20 mt-15 mx-50 gap-10'>
          <img className=' h-[400px]' src="/src/assets/contact_image.png" alt="" />
          <div>
            <h1 className='mt-8 font-bold text-gray-700'>OUR OFFICE</h1>
            <p className='mt-5'>54709 Willms Station 
            Suite <br /> 350, Washington, USA</p>
            <p className='mt-5'>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
           <h1 className='font-bold mt-5 text-gray-800'>CAREERS AT PRESCRIPTO</h1>
            <p className='mt-5'>Learn more about our teams and job openings.</p>
            <button className='mt-5 h-14 w-40 py-2  rounded-sm bg-gray-500 hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact