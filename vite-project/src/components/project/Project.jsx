import React from 'react'

const Project = () => {
  return (
    <>
    
    <div className='h-full w-full flex flex-col  bg-gray-900 '>
        <h3 className='text-red-500 text-center mt-20 text-xl'>Check out my portfolio and share your feedback!</h3>
        <h1 className='text-6xl text-white text-center py-4 font-bold'>My Projects</h1>
        <div className='flex h-full w-full p-14 gap-16'>
            <div className='h-[650px] w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-20 rounded-b-xl hover:rounded-b-lg' src="/images/1.jpg" alt="" />
                <h3 className='text-red-600 mt-6 p-10 text-xl font-semibold'>DOC APPOINTEMENT WEB APP</h3>
                <p className='px-10 text-white text-xl'>A fully functional doctor appointment booking app allowing users to schedule appointments, manage profiles, and get real-time notifications.</p>
            </div>
            <div className='h-[650px] w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-20 rounded-b-md' src="/images/2.jpg" alt="" />
                <h3 className='text-red-600 mt-6 p-10 text-xl font-semibold'>REAL ESTATE WEB APP</h3>
                <p className='px-10 text-white text-xl'>A responsive real estate web application that showcases properties for buying, renting, or selling, complete with filtering and detailed views.</p>
            </div>
            <div className='h-[650px] w-120 hover:bg-black hover:shadow-gray-900 bg-gray-950 rounded-xl'>
                <img className='text-red-600 hover:shadow-2xl hover:p-5 px-10 mt-20 rounded-b-md' src="/images/3.jpg" alt="" />
                <h3 className='text-red-600 mt-6 p-10 text-xl font-semibold'>ECOMMERCE WEBSITE</h3>
                <p className='px-10 text-white text-xl'>A scalable e-commerce platform supporting product listing, cart functionality, and payment integration</p>
            </div>
            
        </div>
        <div className='flex h-full w-full p-14 gap-16'>
            <div className='h-[650px] w-130 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 px-10 mt-20 rounded-b-xl hover:rounded-b-lg' src="/images/ES1.jpg" alt="" />
                <h3 className='text-red-600 mt-6 p-10 text-xl font-semibold'>DOC APPOINTEMENT WEB APP</h3>
                <p className='px-10 text-white text-xl'>A fully functional doctor appointment booking app allowing users to schedule appointments, manage profiles, and get real-time notifications.</p>
            </div>
            <div className='h-[650px] w-120 hover:bg-black bg-gray-950 rounded-xl'>
                <img className='text-red-600 hover:shadow-2xl   hover:p-5 px-10 mt-20 rounded-3xl' src="images/ES3.jpg" alt="" />
                <h3 className='text-red-600 mt-6 p-10 text-xl font-semibold'>REAL ESTATE WEB APP</h3>
                <p className='px-10 text-white text-xl'>A responsive real estate web application that showcases properties for buying, renting, or selling, complete with filtering and detailed views.</p>
            </div>
            <div className='h-[650px] w-120 hover:bg-black hover:shadow-gray-900 bg-gray-950 rounded-xl'>
                <img className='text-red-600 hover:shadow-2xl hover:p-5 px-10 mt-20 rounded-b-md' src="/images/ES3.jpg" alt="" />
                <h3 className='text-red-600 mt-6 p-10 text-xl font-semibold'>ECOMMERCE WEBSITE</h3>
                <p className='px-10 text-white text-xl'>A scalable e-commerce platform supporting product listing, cart functionality, and payment integration</p>
            </div>
            
        </div>
    </div>
    
    
    </>
  )
}

export default Project