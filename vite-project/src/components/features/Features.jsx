import React from 'react'

const Features = () => {
  return (
    <>
    <div className='max-h-full w-full flex flex-col  bg-gray-900'>
        
        <h3 className='text-red-500 px-8 mt-15 '>Features</h3>
        <h1 className='font-bold text-white px-8 mt-10 text-7xl'>What I Do</h1>
        <div className='flex gap-15 px-8 mt-10'>
            <div className='h-96 w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-15' src="/images/icons8-align-left-50.png" alt="" />
                <h1 className='text-3xl font-bold text-white px-10 mt-3'>Business Strategy</h1>
                <p className='text-xl text-gray-400 mt-7 px-10'>Strategic planning and actions to achieve growth and success.</p>
                <img className='px-10 mt-10' src="/images/icons8-arrow-48.png" alt="" />
            </div>
            <div className='h-96 w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 h-20 px-10 mt-10' src="/images/icons8-react-100.png" alt="" />
                <h1 className='text-3xl font-bold text-white px-10 '>React Development</h1>
                <p className='text-xl text-gray-400 mt-7 px-10'>Creating interactive and fast UIs using the React.js library.</p>
                <img className='px-10 mt-10' src="/images/icons8-arrow-48.png" alt="" />
            </div>
            <div className='h-96 w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-10' src="/images/icons8-full-stack-64.png" alt="" />
                <h1 className='text-3xl font-bold text-white px-10 mt-3'>Full Stack Development (MERN)</h1>
                <p className='text-xl text-gray-400 mt-5 px-10'>Strategic planning and actions to achieve growth and success.</p>
                <img className='px-10 mt-10' src="/images/icons8-arrow-48.png" alt="" />
            </div>
        </div>
        <div className='flex gap-15 px-8 mt-10'>
            <div className='h-96 w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-15' src="/images/icons8-database-administrator-48.png" alt="" />
                <h1 className='text-3xl font-bold text-white px-10 mt-3'>Database Management</h1>
                <p className=' text-gray-400 mt-7 px-10'>Expertise in managing and optimizing MongoDB for performance.</p>
                <img className='px-10 mt-7' src="/images/icons8-arrow-48.png" alt="" />
            </div>
            <div className='h-96 w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-15' src="/images/icons8-my-computer-48.png" alt="" />
                <h1 className='text-3xl font-bold text-white px-10 mt-3'>Computer Science Enthusiast</h1>
                <p className='text-xl text-gray-400 mt-7 px-10'>Strategic planning and actions to achieve growth and success.</p>
                <img className='px-10 mt-7' src="/images/icons8-arrow-48.png" alt="" />
            </div>
            <div className='h-96 w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-15' src="/images/icons8-problem-solving-64.png" alt="" />
                <h1 className='text-3xl font-bold text-white px-10 mt-3'>Problem Solving</h1>
                <p className='text-xl text-gray-400 mt-7 px-10'>Skilled in analyzing and solving complex problems effectively.</p>
                <img className='px-10 mt-10' src="/images/icons8-arrow-48.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Features