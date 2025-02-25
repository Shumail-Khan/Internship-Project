import React from 'react'

const Doctor1 = () => {
  return (
    <div className='flex gap-4 '>
        {/* left side */}
        <div>
            <img className='h-[250px] w-full rounded-xl bg-blue-600' src="/src/assets/doc1.png" alt="" />
        </div>
        {/* right side */}
        <div className='h-[250px] w-full border-2 px-5 py-5 rounded-3xl border-black'>
            <div className='flex gap-1'>
                <p>Dr. Richard James</p>
                <img src="src/assets/verified_icon.svg" alt="" />
            </div>
            <div className='flex'>
                <p className='text-sm'>MBBS - General Physician</p>
                <img className='h-3 rounded-2xl mx-1 border-1 border-gray-400 p-2 w-12' src="/Images/2 Years.png" alt="" />
            </div>
            <p className='font-bold '>About</p>
            <p>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective 
            treatment strategies.</p>
            <p>Appointment fee: $50 </p>

        </div>

    </div>
    
  )
}

export default Doctor1